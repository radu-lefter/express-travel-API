// @desc      Get all agencies
// @route     GET /api/v1/agencies
// @access    Public
exports.getAgencies = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all agencies' });
};

// @desc      Get single agency
// @route     GET /api/v1/agencies/:id
// @access    Public
exports.getAgency = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show agency ${req.params.id}` });
};

// @desc      Create new agency
// @route     POST /api/v1/agencies
// @access    Private
exports.createAgency = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new agency' });
};

// @desc      Update agency
// @route     PUT /api/v1/agencies/:id
// @access    Private
exports.updateAgency = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update agency ${req.params.id}` });
};

// @desc      Delete agency
// @route     DELETE /api/v1/agencies/:id
// @access    Private
exports.deleteAgency = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete agency ${req.params.id}` });
};
