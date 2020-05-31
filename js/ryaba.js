const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleFetchButton() {
  fetch(dataURL).then(response => {
    return response.json();
  })
    .then((data) => {
      handleFetchData(data);
    });
}

function handleFetchData(data) {
  let text = data.text;
  console.log(data);
  $("#result").text(text);
}

function handleReplaceButton() {
  fetch(dataURL).then(response => {
    return response.json();
  })
    .then((data) => {
      handleReplaceData(data);
    });
}

function handleReplaceData(data) {
  const var1 = $("input[name=var1]").val();
  const var2 = $("input[name=var2]").val();
  const var3 = $("input[name=var3]").val();
  const var4 = $("input[name=var4]").val();
  const var5 = $("input[name=var5]").val();
  const var6 = $("input[name=var6]").val();
  const speach = $("input[name=speach]").val();

  let text = data.text.toString();
  let resultText = text
    .split("{var1}").join(var1)
    .split("{var2}").join(var2)
    .split("{var3}").join(var3)
    .split("{var4}").join(var4)
    .split("{var5}").join(var5)
    .split("{var6}").join(var6)
    .split("{speach}").join(speach);

  $("#result").text(resultText);
}

function init() {
  $("#button-fetch").click(handleFetchButton);

  $("#button-replace").click(handleReplaceButton);
}

$(document).ready(init);
