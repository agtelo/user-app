"use client"

import { useRouter } from "next/navigation";

export default function Users({ users }) {
    const router = useRouter()
    return (<>
        <div className="flex flex-wrap justify-center ">
            {users.map((user =>
                <div key={user.id} className="card w-64 bg-base-200 m-5 shadow-xl hover:ring ring-purple-400 ring-offset-1 ring-offset-base-300">
                    <figure className="px-10 pt-10">
                        <img src={user.avatar} alt="avatar" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{user.first_name + " " + user.last}</h2>
                        <p className=" font-thin">ID #{user.id}</p>

                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={() => {
                                router.push(`/user/${user.id}`)
                            }}>Profile</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </>);
}
