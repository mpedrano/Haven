export default function Trainers() {
    return (
        <main>
            <div className="card w-96 h-90 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://plus.unsplash.com/premium_photo-1664304973210-aee8dfc4d0dc?q=80&w=2986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cat and dog laying together in grass" />
                </figure>
                <div className="card-body w-96 h-90">
                    <h2 className="card-title text-lg">
                        Trainers
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="text-sm">Choosing the right trainer for your pet is essential for their training and well-being. Here are some factors to consider. </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Animal Training</div>
                        <div className="badge badge-outline">Resources</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
