export default function DogTraining() {
    return (
        <main>
            <div className="card w-96 h-90 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1546815708-410983510897?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dog running through training course" />
                </figure>
                <div className="card-body w-96 h-90">
                    <h2 className="card-title text-lg">
                        Dog Training
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="text-sm">Learn proven strategies and practical tips for training your dog. Use essential training techniques to build a strong foundation. </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Animal Training</div>
                        <div className="badge badge-outline">Resources</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
