async function getUser(id) {
    console.log(id)
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data


}

async function UserDetail({ params }) {
    const user = await getUser(params.id)


    return (
        < >
            <div className="flex justify-center m-10">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure className="mx-10"><img src={user.avatar} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{user.first_name + " " + user.last_name}</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div >
        </>)
}
export default UserDetail