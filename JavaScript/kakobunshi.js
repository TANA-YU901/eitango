//問題数
window.number = 0
//正解数
window.seikai = 0

//Jsonの読み込み
$.getJSON('../JSON/kakobunshi.json', function (kakobunshi, textStatus, jqXHR) {
  window.kako = shuffle(kakobunshi)
})
function mondai() {
  $('#q_box').text(window.kako[window.number].gen) //問題を表示
}

function kotaeawase() {
  const kaitou = $('#kaitou').val() //入力したもの
  const answer = window.kako[window.number].kako //答え
  window.number++
  if (kaitou == answer) {
    var result = window.confirm('正解')
    window.seikai++
    if (result == true) {
      $('#q_box').text(window.kako[window.number].gen) //問題を表示
      $('#kaitou').val("")
    } else if (result == false) {
      alert("終了！" + window.seikai + "/" + window.number + "正解！")
    }
  } else {
    var result = window.confirm('不正解…答えは' + answer + 'でしたー')
    if (result == true) {
      $('#q_box').text(window.kako[window.number].gen) //問題を表示
      $('#kaitou').val("")
    } else if (result == false) {
      alert("終了！" + window.seikai + "/" + window.number + "正解！\n" + window.seikai / window.number * 100 + "％正解！")
    }
  }
}

function reset() {
  window.number = 0
  window.seikai = 0
  alert("リセットしました")
}


function shuffle(array) {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
  }
  return array
}