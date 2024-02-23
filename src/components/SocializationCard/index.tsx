export default function SocializationCard() {
    return (
        <main>
            <div className="card w-96 h-90 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dogs together" />
                </figure>
                <div className="card-body w-96 h-90">
                    <h2 className="card-title text-lg">
                        Socialization
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="text-sm">Help your pet develop positive social skills with our socialization tips. Learn how to introduce them to new environments and other people.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Animal Care</div>
                        <div className="badge badge-outline">Resources</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
