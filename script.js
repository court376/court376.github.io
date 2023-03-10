/*Typewriter.js// https://github.com/ronv/Typewriter.js*/var aText = new Array("<span class='terminal__text__span'>hi, i'm Nathan</span>","<span class='terminal__text__span'>a public class void client side hacker</span>","<span class='terminal__text__span'>I'm sorry to do this to you user (on chromebook)...</span>","<span class='terminal__text__span'>but i'm hacking your private files</span>","<span class='terminal__text__span'>these files include all of your important ones. You may verify. This <a href='chrome://device-log'>portfolio</a> has all of your files</span>","<span class='terminal__text__span'>These include your mp4, mp3, html, coding, drive, downloads, bookmarks, extensions, online data, .jpeg, .gif, .png, jpg, .bat, .js, .py, .html, .unkown, and any other files on your computer</span>","<span class='terminal__text__span'> If you have any questions here is my <a href='nathan.schmitt@franklinsabers.org'>email</a></span>","<span class='terminal__text__span'>to decript your data please go to this link<a 'href=https://www.cryptoprank.com/#/crypto'> decription link</a></span>");
var iSpeed = 25;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;
var iTextPos = 0;
var sContents = "";
var iRow;
function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 200);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

$(function() {
  $(".terminal").draggable();
});

// ENcryption

var barWidth = 0;

function contLoading() {
  if (barWidth >= 10) {
    document.getElementById("things").innerHTML = "encrypting: /system/BIOS";
  }
  if (barWidth >= 20) {
    document.getElementById("things").innerHTML = "encrypting: /home/projects";
  }
  if (barWidth >= 30) {
    document.getElementById("things").innerHTML = "encrypting: /.hidden";
  }
  if (barWidth >= 40) {
    document.getElementById("things").innerHTML =
      "encrypting: /.hidden/data/file_Archive";
  }
  if (barWidth >= 50) {
    document.getElementById("things").innerHTML =
      "encrypting: /.hidden/file_Database";
  }
  if (barWidth >= 60) {
    document.getElementById("things").innerHTML = "encrypting: /journal.txt";
  }
  if (barWidth >= 70) {
    document.getElementById("things").innerHTML =
      "encrypting: /finance/therapyInvoices/";
  }
  if (barWidth >= 80) {
    document.getElementById("things").innerHTML =
      "encrypting: /videos/youtube.com";
  }
  if (barWidth >= 90) {
    document.getElementById("things").innerHTML = "encrypting: /device-history/";
  }
  if (barWidth >= 95) {
    document.getElementById("things").innerHTML =
      "encrypting: /protacalyps/ai_detection/coolmathgames";
  }

  if (barWidth >= 100) {
    var loadBar = document.getElementById("loadingProgress");
    var loadtran = document.getElementById("loadingProgress");
    document.getElementById("status").innerHTML = "rekt";
    document.getElementById("precentage").innerHTML = "rekt";
    document.getElementById("typedtext").innerHTML = "rekt";
    document.getElementById("things").innerHTML =
      "encryption result: hacked :(";
    loadBar.style.width = 0;
    loadtran.style.transition = "width 2s ease-in";
  } else {
    var percentage = document.getElementById("precentage");
    var loadBar = document.getElementById("loadingProgress");
    barWidth = barWidth + 1;
    loadBar.style.width = barWidth + "%";
    percentage.innerHTML = barWidth + "%";
  }
}

window.setInterval(contLoading, 400);