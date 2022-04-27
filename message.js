console.log(hello());
const hello = () => {
  return getMessage();
};

function getMessage() {
  return "halo!";
}
