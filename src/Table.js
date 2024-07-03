 export function TableData({ recordsData, deletedata }) {
    return (
        <div className="flex justify-center mt-[5%]">

            <table>

                <thead>
                    <th>User Name:</th>
                    <th>E-mail:</th>
                    <th>Password:</th>
                </thead>

                <tbody>
                    {recordsData?.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.uname}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td><button type="delete" onClick={() => deletedata(index)} className='bg-transparent rounded-md border-[#c7aca7] text-[#716a4c] font-bold'>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>

    )
}