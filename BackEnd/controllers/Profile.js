const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadMediaToCloudinary } = require("../config/mediaUpload.jsx");
const InstructorApprovals = require("../models/InstructorApprovals");
const mailSender = require("../config/mailSender.jsx");
const { instructorApproval } = require("../mailTemplates/instructorApproval");
const { instructorDecline } = require("../mailTemplates/instructorDecline");
const Course = require("../models/Course");

// update Profile, since we are creating null values at the time of Sign up the user
exports.updateProfile = async (req, res) => {

    try{
        console.log(req.body, "in Update Profile");
        // fetch data
        const {gender, contactNumber, DateOfBirth="", about=""} = req.body;
        // we are logged in and we have user paramater in req that was added into req.user = payload at the time of middleware authentication
        // fetch userId from req.user
        const id = req.user.id;
        // validation
        if(!id){
            return res.status(204).json({
                success: false,
                message: "Error in Updating the Profile",
                error: error.message,
            })
        }
        // find profile
        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;
        const profileDetails = await Profile.findById(profileId);
        // update profile info in db
        profileDetails.dateOfBirth = DateOfBirth;
        profileDetails.about = about;
        profileDetails.gender = gender;
        profileDetails.contactNumber = contactNumber;
        // we use .save() to save the details in our DB since the object is already created at the time of sign up
        await profileDetails.save()

        // return response
        return res.status(200).json({
            success: true,
            data: profileDetails,
            message: "Profile Updated Successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Error in Updating the Profile",
            error: error.message,
        })
    }

}

// deleteAccount
exports.deleteAccount = async (req, res) => {

    try{
        // get Id
        const id = req.user.id;
        const userDetails = await User.findById(id);
        // validation
        if(!userDetails){
            return res.status(204).json({
                success: false,
                message: "Insufficient details",
            })
        }
        // get profile Id
        const profileId = userDetails.additionalDetails;
        // delete Profile
        await Profile.findByIdAndDelete(profileId);
        // delete User
        await User.findByIdAndDelete({_id: id});
        // return response
        return res.status(200).json({
            success: true,
            message: "User Deleted Successfully",
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Error in deleting the Profile",
            error: error.message,
        })
    }

}

// getAllUserDetlails
exports.getUserDetails = async (req, res) => {

    try{
        // fetch ID
        const id = req.user.id;
        // db call
        const userDetails = await User.findById(id).populate("additionalDetails").exec();
        // return response
        return res.status(200).json({
            success: true,
            message: "User Data Fetched Successfully",
            data: userDetails,
        })
    }
    catch(error){
        return res.status(500).json({
            success: true,
            message: "Error in fetching Data",
        })
    }

}

//get Enrolled Courses
exports.getEnrolledCourses = async (req, res) => {
    console.log("akash in enrolled courses");
    try{
        const userID = req.user.id;
        let userDetails = await User.findOne({
            _id: userID,
          })
            .populate({
              path: "inventory",
              populate: "ratingsAndReviews"
            })
            .exec()
            
        return res.status(200).json({
            success: true,
            data: userDetails.inventory
        })
        
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//updateDisplayPicture
exports.updateProfilePicture = async (req, res) => {
    try{
        // get file from request
        const dp = req.files.displayPicture;
        // get the userID
        const userID = req.user.id;
        // upload it to cloudinary and get the link
        const image = await uploadMediaToCloudinary(
            dp,
            process.env.FOLDER_NAME,
            1000,
            1000
        )
        // update the link in User DB
        const response = await User.findByIdAndUpdate(
            {_id: userID},
            {image: image.secure_url},
            {new: true}
        )
        // return the response
        return res.status(201).json({
            success: true,
            message: "Display Picture Updated Successfully",
            data: response,
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in updating the profile picture",
        })
    }

}

//removeProfilePicture
exports.removeProfilePicture = async (req, res) => {
    try{
        console.log(req);
        const userId = req.user.id;
        const {firstName, lastName} = req.body;   
        const response = await User.findByIdAndUpdate(
            {_id: userId},
            {image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`},
            {new: true}
        )

        req.body.image = `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`;

        return res.status(201).json({
            success: true,
            message: "Profile Picture removed successfully",
            data: response
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Error in deleting the profile picture"
        })
    }
}

exports.instructorDashBoard = async(req, res) => {
    try{
        const courseDetails = await Course.find({
            instructor: req.user.id
        })

        const courseData = courseDetails.map((course) => {
            const totalStudentsEnrolled = course.studentsEnrolled.length
            const totalAmountGenerated = totalStudentsEnrolled * course.price


            const courseDataWithStats= {
                _id: course._id,
                courseName: course.name,
                courseDescription: course.courseDescription,
                totalStudentsEnrolled,
                totalAmountGenerated
            }

            return courseDataWithStats
        })

        return res.status(200).json({
            success: true,
            data: courseData
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

exports.getInstructorApprovalRequests = async(req, res) => {
    console.log("in getInstructorApproval")
    try{
        // db call
        const requests = await InstructorApprovals.find({}).populate("additionalDetails");
        // return response
        return res.status(200).json({
            success: true,
            message: "Instructor Requests Fetched Successfully",
            data: requests,
        })
    }
    catch(error){
        return res.status(500).json({
            success: true,
            message: "Error in fetching Data",
        })
    }
}

exports.declineInstructorApprovalRequests = async(req, res) => {
    try{
        const {emailId, name} = req.body;

        console.log()

        await InstructorApprovals.findOneAndDelete({emailID: emailId})
        
        await mailSender(emailId, `Instructor Request - Update`, instructorApproval(emailId, name))

        return res.status(200).json({
            success: true,
            message: "Instructor Request Declined Successfully",
        })
    }
    catch(error){
        return res.status(500).json({
            success: true,
            message: "Error in Deleting the Request",
        })
    }
}

exports.approveInstructorApprovalRequests = async(req, res) => {
    try{
        const {emailId} = req.body;

        const user = await InstructorApprovals.findOne({emailID: emailId})

        const {firstName, lastName, emailID, password, accountType, image, additionalDetails} = user
        
        await User.create({
            firstName,
            lastName,
            emailID,
            password,
            accountType,
            image,
            additionalDetails
        })
        
        await mailSender(emailId, `Instructor Request - Update`, instructorDecline(emailId, firstName))

        await InstructorApprovals.findOneAndDelete({emailID: emailId})

        return res.status(200).json({
            success: true,
            message: "Instructor Request Accepted Successfully",
        })
    }
    catch(error){
        return res.status(500).json({
            success: true,
            message: "Error in Deleting the Request",
        })
    }
}