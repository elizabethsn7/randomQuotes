function generate() {
  var quotes = {
    "― Albert Einstein":
      "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.",
    "― Leonardo da Vinci": "The noblest pleasure is the joy of understanding",
    "― Jon Krakauer":
      "He was unheeded, happy, and near to the wild heart of life. He was alone and young and wilful and wildhearted, alone amid a waste of wild air and brackish waters and the seaharvest of shells and tangle and veiled grey sunlight.",
  };
  var authors = Object.keys(quotes);
  var author = authors[Math.floor( Math.random() * authors.length )];
  var quote = quotes[author];

  document.getElementById( "quote" ).innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
