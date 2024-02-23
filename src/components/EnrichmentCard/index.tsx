export default function EnrichmentCard() {
    return (
        <main>
            <div className="card w-96 h-90 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images.unsplash.com/photo-1424709746721-b8fd0ff52499?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dog with chew toy" />
                </figure>
                <div className="card-body w-96 h-90">
                    <h2 className="card-title text-lg">
                        Enrichment
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="text-sm">Keep your pet mentally stimulated and entertained with activities. Discover fun games, puzzles, and interactive toys..</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Animal Care</div>
                        <div className="badge badge-outline">Resources</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
