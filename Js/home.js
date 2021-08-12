window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    const innerHtml = `${headerHtml}
    <tr>
        <td>
            <img class="profile" alt="" src="C:\Users\HP\OneDrive\Desktop\EmpPayrollApp\asserts\ProfilePic\Ellipse -1.png">
        </td>
        <td>Shreya</td>
        <td>feMale</td>
        <td>
            <div class="dept-label">Engineering</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>2000000</td>
        <td>18 September 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="C:\Users\HP\OneDrive\Desktop\EmpPayrollApp\asserts\icon\delete-black-18dp.svg">
            <img id="1" onclick="update(this)" alt="update" src="C:\Users\HP\OneDrive\Desktop\EmpPayrollApp\asserts\icon\create-black-18dp.svg">
        </td>
    </tr>`;
    document.querySelector('#display').innerHTML = innerHtml
}