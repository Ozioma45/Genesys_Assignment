

  document.getElementById('submit').addEventListener('click', function () {
    const arrInput = document.getElementById('arr').value.split(',').map(Number);
    const nInput = parseInt(document.getElementById('nth-rank').value);

    const result = nth_most_rare(arrInput, nInput);

    document.getElementById('result').innerText = `Result: ${result}`;
});

function nth_most_rare(arr, n) {
    const countMap = {};
    arr.forEach(num => {
        countMap[num] = (countMap[num] || 0) + 1;
    });

    const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => countMap[a] - countMap[b]);

    return uniqueSorted[n - 1];
}