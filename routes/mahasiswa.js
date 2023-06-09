const express = require("express");
const router = express.Router();
const Mahasiswa = require("../Models/Mahasiswa");

// create api for mahasiswa
router.post("/", async (req, res) => {
  // tampung dlu input mahasiswa
  const mahasiswaPost = new Mahasiswa({
    npm: req.body.npm,
    nama: req.body.nama,
    alamat: req.body.alamat,
  });

  // simpan data dengan try cacth
  try {
    //simpan data nya
    const mahasiswa = await mahasiswaPost.save();
    //beri response
    res.json(mahasiswa);
  } catch (error) {
    res.json({ massege: error });
  }
});

//Read
router.get("/", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});

router.put("/:mahasiswaId", async (req, res) => {
  const data = {
    npm: req.body.npm,
    nama: req.body.nama,
    alamat: req.body.alamat,
  };

  try {
    const mahasiswa = await Mahasiswa.updateOne(
      { _id: req.params.mahasiswaId },
      data
    );
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:mahasiswaId", async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.deleteOne({
      _id: req.params.mahasiswaId,
    });
    res.json(mahasiswa);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
