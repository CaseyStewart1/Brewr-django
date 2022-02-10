const getAllStyles = async (req, res) => {
  try {
    const styles = await Style.find();
    return res.status(200).json({ styles });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getStyleById = async (req, res) => {};
const NewBeer = async (req, res) => {};
const getAllBeers = async (req, res) => {
  try {
    const beers = await Beer.find();
    return res.status(200).json({ beers });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getBeerById = async (req, res) => {
  try {
    const { id } = req.params;
    const beer = await Beer.findById(id);
    if (beer) {
      return res.status(200).json({ beer });
    }
    return res.status(404).send('No Beer ID');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getAllInTypes = async (req, res) => {};
const getInTypeById = async (req, res) => {};
const Newingredient = async (req, res) => {};
const getAllingredients = async (req, res) => {};
const getingredientById = async (req, res) => {};
