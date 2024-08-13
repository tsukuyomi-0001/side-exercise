var prob = []
for (let i = 0; i<5; i++){
    prob[i] = Math.random()
}

// console.log(prob)

var color = ['red', 'green', 'blue', 'yellow', 'aqua']

var cont = document.getElementsByClassName('box')

function min(arr) {
    var index = 10
    var value = 100
    for (let i = 0; i<arr.length;i++){
        if (value > arr[i]){
            value = arr[i]
            index = i
        }
    }
    return [index, value]
}

for (var i = 0; i < 5; i++) {
    var minindex = min(prob)
    cont[i].style.backgroundColor = color[minindex[0]]
    console.log(color[minindex[0]])
    prob.splice(minindex[0], 1)
}

// console.log(prob)
// var minindex = min(prob)
// prob.splice(minindex[0], 1)
// console.log(prob)
