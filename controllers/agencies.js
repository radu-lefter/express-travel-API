const Agency = require('../models/Agency');

// @desc      Get all agencies
// @route     GET /api/v1/agencies
// @access    Public
exports.getAgencies = async (req, res, next) => {
  try {
    const agencies = await Agency.find();

    res
      .status(200)
      .json({ success: true, count: agencies.length, data: agencies });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Get single agency
// @route     GET /api/v1/agencies/:id
// @access    Public
exports.getAgency = async (req, res, next) => {
  try {
    const agency = await Agency.findById(req.params.id);

    if (!agency) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: agency });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Create new agency
// @route     POST /api/v1/agencies
// @access    Private
exports.createAgency = async (req, res, next) => {
  try {
    const agency = await Agency.create(req.body);

    res.status(201).json({
      success: true,
      data: agency
    });
  } catch (err) {
    console.log(err)
    res.status(400).json({ success: false });
  }
};

// @desc      Update agency
// @route     PUT /api/v1/agencies/:id
// @access    Private
exports.updateAgency = async (req, res, next) => {
  try {
    const agency = await Agency.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!agency) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: agency });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Delete agency
// @route     DELETE /api/v1/agencies/:id
// @access    Private
exports.deleteAgency = async (req, res, next) => {
  try {
    const agency = await Agency.findByIdAndDelete(req.params.id);

    if (!agency) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
