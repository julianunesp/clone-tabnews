function status(request, response) {
  response.status(200).json({ minhachave: "meu valor" });
}

export default status;
