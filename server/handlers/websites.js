const Website = require("../models/websiteModel");

const getAllWebsites = async (req, res, role = "client") => {
  for (let [key, value] of Object.entries(req.query)) {
    if (!value || value === `""`) {
      delete req.query[key];
    }
    if (key === "url") {
      req.query[key] = new RegExp(value, "i");
    }

    if (key === "sort") {
      const [sort, by] = value.split(",");
      req.query.sort = { [sort]: by };
    }
  }

  if (req.body.userRole !== "admin") {
    req.query.user_id = req.body.user._id;
  }
  try {
    const websites = await Website.find({ ...req.query })
      .populate({
        path: "user_id",
        select: "-password",
      })
      .sort(req.query.sort);
    if (websites) {
      res.status(200).json({ success: true, data: websites });
      return;
    } else {
      res.status(200).json({ success: false, message: tasks });
      return;
    }
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
    return;
  }
};

exports.getAllWebsites = getAllWebsites;

const getWebsiteById = async (req, res) => {
  try {
    const website = await Website.findById(req.params.id);
    if (
      (website &&
        req.body.userRole !== "admin" &&
        req.body.user._id === website.user_id) ||
      req.body.userRole === "admin"
    ) {
      res.status(200).json({ success: true, data: website });
      return;
    } else {
      res.status(403).json({
        success: false,
        message: `You're not authorized to access this website.`,
      });
      return;
    }
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
};

exports.getWebsiteById = getWebsiteById;
