import React, {useState} from 'react'

export const ContactMePage = () => {

    const [senderEmail, setSenderEmail] = useState('');
    const [emailSubject, setEmailSubject] = useState('');
    const [emailBody, setEmailBody] = useState('');
    const [senderName, setSenderName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Construct the Gmail compose window URL with form data
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dragonjeric@gmail.com&su=Email+from+-+${encodeURIComponent(senderName)}+,+${encodeURIComponent(senderEmail)}&body=${encodeURIComponent(emailBody)}`;
    
        // Open Gmail compose window in a new tab
        window.open(gmailUrl, '_blank');
      };

  return (
    <div id='contactMe' className='w-3/4 h-auto mx-auto mb-20'>
        <div className='w-full'>
            <p className='text-center text-3xl font-medium'>Get in touch</p>
            <p className='text-center w-3/4 mx-auto mb-10'>We'll create a high-quality useable websites and build at least production ready applications paving the way for you to showcase your product professionaly.</p>
        </div>
        <div className='flex gap-5 border-2 border-black rounded-xl p-2'>
            <div className='w-2/5 p-10 bg-[#00dfc0] rounded-lg'>
                <p className='font-semibold mb-1'>Contact Information</p>
                <p className='text-sm mb-4'>This are my contact information active at this moment.</p>
                <div className='flex gap-2 items-center mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                    <p>0997-658-9181</p>
                </div>
                <div className='flex gap-2 items-center mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                    <p>Jeric James Viernes</p>
                </div>
                <div className='flex gap-2 items-center mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    <p>Cabuyao Laguna Philippines</p>
                </div>
            </div>
            <div className='w-3/5'>
                <form onSubmit={handleSubmit} className='w-full p-10'>
                    <div className='w-full flex gap-10 mb-10'>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="">Your name</label>
                            <input type="text" name='senderName' value={senderName} onChange={(e) => setSenderName(e.target.value)} className='py-1 px-2 w-full border-b border-black outline-none bg-transparent focus:border-[#00dfc0]'/>
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label htmlFor="">Your email</label>
                            <input type="email" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} name='emailAddress' className='py-1 px-2 w-full border-b border-black outline-none bg-transparent focus:border-[#00dfc0]' />
                        </div>
                    </div>
                    <div className='w-full mb-10'>
                        <label htmlFor="">Email Subject</label>
                        <input type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} name='emailAddress' className='py-1 px-2 w-full border-b border-black outline-none bg-transparent focus:border-[#00dfc0]' />
                    </div>
                    <div className='w-full mb-5'>
                        <label htmlFor="" className='font-semibold text-[#00dfc0]'>Message</label>
                        <textarea value={emailBody} onChange={(e) => setEmailBody(e.target.value)} name="emailBody" id="" cols="20" rows="5" className='py-1 px-2 w-full border-b border-black outline-none bg-transparent focus:border-[#00dfc0]'></textarea>
                    </div>
                    <button type='submit' className='px-6 py-2 text-white font-medium bg-[#00dfc0] text-sm rounded-md'>Send message</button>
                </form>
            </div>
        </div>
    </div>
  )
}
