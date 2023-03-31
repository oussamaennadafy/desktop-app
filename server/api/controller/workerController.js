const asyncHandler = require("express-async-handler");
const Worekr = require("../models/workerModel");


// @desc    Register a new worker
// @route   POST /worker/register
// @access  Public

const registerWorker = asyncHandler(async (req, res) =>
{
    const {
        subjectName,
        email,
        password,
        number,
        address,
    } = req.body;

    if (
        !subjectName ||
        !email ||
        !password ||
        !number ||
        !address
    )
    {
        res.status(400);
        throw new Error("Please fill in all fields");
    }
});

// @desc    get all workers
// @route   GET /worker
// @access  Private

const getWorkers = asyncHandler(async (req, res) =>
{
    const workers = await Worekr.find({});
    res.json(workers);
}
    
);

// @desc    get worker by id
// @route   GET /worker/:id
// @access  Private

const getWorkerById = asyncHandler(async (req, res) =>
{
    const worker = await Worekr.findById(req.params.id);
    if (worker)
    {
        res.json(worker);
    } else
    {
        res.status(404);
        throw new Error("worker not found");
    }
});

// @desc    delete worker
// @route   DELETE /worker/:id
// @access  Private

const deleteWorker = asyncHandler(async (req, res) =>
{
    const worker = await Worekr.findById(req.params.id);
    if (worker)
    {
        await worker.remove();
        res.json({ message: "worker removed" });
    } else
    {
        res.status(404);
        throw new Error("worker not found");
    }
});

// @desc    update worker
// @route   PUT /worker/:id
// @access  Private

const updateWorker = asyncHandler(async (req, res) =>
{
    const worker = await Worekr.findById(req.params.id);
    if (worker)
    {
        worker.subjectName = req.body.subjectName || worker.subjectName;
        worker.email = req.body.email || worker.email;
        worker.number = req.body.number || worker.number;
        worker.address = req.body.address || worker.address;
        const updatedWorker = await worker.save();
        res.json(updatedWorker);
    } else
    {
        res.status(404);
        throw new Error("worker not found");
    }
});

module.exports = {
    registerWorker,
    getWorkers, 
    getWorkerById,
    deleteWorker,
    updateWorker,
};




    
    
    
    




  
