export default function CatTraining() {
    return (
        <main>
            <div className="card w-96 h-90 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1646269754696-ab256e5d24a4?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cat in harness laying in grass" />
                </figure>
                <div className="card-body w-96 h-90">
                    <h2 className="card-title text-lg">
                        Cat Training
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="text-sm">Understand the unique nature of cats and learn how to train them using positive reinforcement methods. </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Animal Training</div>
                        <div className="badge badge-outline">Resources</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
