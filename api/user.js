module.exports = (req, res) => {
  if (req.method === "GET") {
    res.json([
      { name: "TH", location: "Peru" },
      { name: "Edison", location: "Afganistan" },
    ]);
  } else {
  }
};
