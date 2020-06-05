const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route   GET /api/profile/me
// @desc    get current users profile
// @access  Private

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   Post /api/profile/
// @desc    Create or update a user profile
// @access  Private

router.post("/", auth, async (req, res) => {
  // lägg till error handling senare om det behövs för text -> title etc.
  //   const error = validationResult(reg);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

  const {
    website,
    location,
    bio,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = req.body;

  // Build profile object
  const profileFields = {};

  profileFields.user = req.user.id;
  if (website) profileFields.website = website;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;

  profileFields.social = {};
  if (youtube) profileFields.social.youtube = youtube;
  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;
  if (linkedin) profileFields.social.linkedin = linkedin;
  if (instagram) profileFields.social.instagram = instagram;

  try {
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    return res.json(profile);
  } catch (err) {
    // Create profile
    //     profile = new Profile(profileFields);
    //     await profile.save();
    //     res.json(profile);
    //   }
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
