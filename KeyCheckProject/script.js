const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color' style="text-align: center; width: 100%;">
    <table style="border: 1px solid black;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black;">key</th>
            <th style="border: 1px solid black;">keyCode</th>
            <th style="border: 1px solid black;">Code</th>
        </tr>
        <tr>
            <td style="border: 1px solid black;">${e.key === " " ? "space" : e.key}</td>
            <td style="border: 1px solid black;">${e.keyCode}</td>
            <td style="border: 1px solid black;">${e.code}</td>
        </tr>
    </table>
</div>
    `
})