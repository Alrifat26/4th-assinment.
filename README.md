

1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
Method	কিসের ভিত্তিতে খোঁজে	রিটার্ন টাইপ (কি ফেরত দেয়)
getElementById	নির্দিষ্ট ID	সরাসরি একটি সিঙ্গেল এলিমেন্ট।
getElementsByClassName	নির্দিষ্ট Class	একটি HTMLCollection (অ্যারের মতো, কিন্তু অ্যারে নয়)।
querySelector	CSS Selector (id, class, tag)	প্রথম যে এলিমেন্টটি মিলবে শুধু সেটি।
querySelectorAll	CSS Selector (id, class, tag)	একটি NodeList (সবগুলো এলিমেন্ট যা ওই সিলেক্টরের সাথে মিলে)।
টিপস: বর্তমানে querySelector এবং querySelectorAll বেশি জনপ্রিয় কারণ এগুলো অনেক ফ্লেক্সিবল।

2.How do you create and insert a new element into the DOM?


তৈরি করা: document.createElement('tag_name')

কন্টেন্ট দেওয়া: element.innerText = "Hello"

যুক্ত করা: parentElement.appendChild(newElement)

3. What is Event Bubbling? And how does it work?



4. What is Event Delegation in JavaScript? Why is it useful?

Memory Efficiency:১০০০টি লিস্ট আইটেম (<li>) আছে। ১০০০ বার লিসেনার বসানোর চেয়ে ১টি প্যারেন্ট <ul>-এ লিসেনার বসানো 

Dynamic Content: নতুন কোনো চাইল্ড এলিমেন্ট ভবিষ্যতে যোগ করলেও সেটি অটোমেটিক ওই ইভেন্টের আওতায় চলে আসে।

5.What is the difference between preventDefault() and stopPropagation() methods? 

preventDefault(): এটি ব্রাউজারের কোনো ডিফল্ট কাজ থামিয়ে দেয়।



stopPropagation(): এটি ইভেন্ট বাবলিং (Event Bubbling) থামিয়ে দেয়।
