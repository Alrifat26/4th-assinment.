// শুরুতে ৮টি ডাইনামিক ডাটা [cite: 1, 6]
let jobs = [
    { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130k - $175k", description: "Build cross-platform mobile applications using React Native. Work on products used by millions.", status: "all" },
    { id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80k - $120k", description: "Create stunning web experiences for high-profile clients with modern web design trends.", status: "all" },
    { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125k - $165k", description: "Transform complex data into compelling visualizations using D3.js and React.", status: "all" },
    { id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140k - $190k", description: "Design and maintain scalable backend systems using Python and AWS cloud infrastructure.", status: "all" },
    { id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110k - $150k", description: "Create beautiful and functional user interfaces for our suite of products.", status: "all" },
    { id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130k - $170k", description: "Build enterprise applications with JavaScript and modern frameworks.", status: "all" },
    { id: 7, company: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120k - $160k", description: "Join our fast-growing startup and work on our core platform with Node.js and React.", status: "all" },
    { id: 8, company: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130k - $175k", description: "Lead the frontend development of scalable web applications using React and TypeScript.", status: "all" }
];

let currentFilter = 'all';

function renderJobs() {
    const wrapper = document.getElementById('jobs-wrapper');
    const displayCount = document.getElementById('job-display-count');
    
    // ফিল্টার অনুযায়ী ডাটা আলাদা করা [cite: 2, 9]
    const filteredJobs = jobs.filter(job => currentFilter === 'all' ? true : job.status === currentFilter);
    displayCount.innerText = filteredJobs.length;
    wrapper.innerHTML = '';

     // "No Jobs" মেসেজ যদি ডাটা না থাকে
    if (filteredJobs.length === 0) {
        wrapper.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-dashed border-gray-300 w-full shadow-sm">
                
                <img src="script/jobs.png" 
                     alt="No Jobs" 
                     class="w-64 h-64 object-contain mb-4" />
                
                <h2 class="text-2xl font-bold text-slate-700">No jobs available</h2>
                <p class="text-gray-400 mt-2 text-center">Check back soon for new job opportunities</p>
            </div>`;
        updateDashboard();
        return;
    }

    // কার্ড রেন্ডার করা [cite: 6, 11]
    filteredJobs.forEach(job => {
        const card = document.createElement('div');
        card.className = "bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative transition-all hover:shadow-md w-full";
        card.innerHTML = `
            <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors">

                <i class="fa-solid fa-trash-can text-lg"></i>
            </button>

            <div class="mb-4">
                <h4 class="text-xl font-bold text-[#1E293B]">${job.company}</h4>
                <p class="text-gray-500 font-medium">${job.position}</p>
            </div>


            <div class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400 mb-4">
                <span>${job.location}</span>
                <span>• ${job.type}</span>
                <span>• ${job.salary}</span>
            </div>


            <div class="inline-block px-3 py-1 rounded text-xs font-bold mb-4 uppercase ${job.status === 'all' ? 'bg-blue-50 text-blue-600' : job.status === 'interview' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}">
                ${job.status === 'all' ? 'NOT APPLIED' : job.status}
            </div>


            <p class="text-gray-600 text-sm mb-6 leading-relaxed">${job.description}</p>
            
            <div class="flex gap-3">
                <button onclick="updateStatus(${job.id}, 'interview')" class="btn btn-outline btn-success btn-sm px-6 font-bold ${job.status === 'interview' ? 'btn-active' : ''}">INTERVIEW</button>
                <button onclick="updateStatus(${job.id}, 'rejected')" class="btn btn-outline btn-error btn-sm px-6 font-bold ${job.status === 'rejected' ? 'btn-active' : ''}">REJECTED</button>
            </div>
        `;
        wrapper.appendChild(card);
    });

    updateDashboard();
}

// স্ট্যাটাস আপডেট ও টগল লজিক [cite: 2, 10]
function updateStatus(id, newStatus) {
    const jobIndex = jobs.findIndex(j => j.id === id);
    jobs[jobIndex].status = jobs[jobIndex].status === newStatus ? 'all' : newStatus;
    renderJobs();
}

// ডিলিট লজিক (চ্যালেঞ্জ রিকোয়ারমেন্ট) [cite: 2, 8]
function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    renderJobs();
}

// ট্যাব নেভিগেশন [cite: 2, 9]
function filterJobs(type) {
    currentFilter = type;
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('tab-active', 'bg-blue-600', 'text-white'));
    
    // একটিভ ট্যাবে স্টাইল যোগ করা
    event.target.classList.add('tab-active');
    renderJobs();
}

// ড্যাশবোর্ড কাউন্ট আপডেট [cite: 2, 10]
function updateDashboard() {
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
}

renderJobs();