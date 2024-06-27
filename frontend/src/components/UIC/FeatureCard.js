import React from 'react'

export default function FeatureCard() {
    return (
        <div>
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Trip Name</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Trip Type</h6>
                    <p class="card-text">Short Description. With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-success">More Details</a>
                </div>
            </div>
        </div>
    )
}