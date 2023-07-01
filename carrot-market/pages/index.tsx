import type { NextPage } from 'next'

export default function NextPage() {
  return <div className='bg-slate-400 py-20 px-20 grid gap-10 min-h-screen'>
    <div className='bg-white p-6 rounded-3xl shadow-xl'>
      <span className='font-semibold text-3xl '>Select Item</span>
      <ul>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className='flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-500'>
            <span className="text-gray-500 ">Grey Chair</span>
            <span className='font-semibold'>$19</span>
          </div>
        ))}
      </ul>
      
      <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
        <span>Total</span>
        <span className='font-semibold'>$10</span>
      </div>
      <button className='mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto hover:bg-teal-500 hover:text-black
      active:bg-yellow-500 focus:bg-red-500'>Checkout</button>
    </div>

    <div className='bg-white overflow-hidden rounded-3xl shadow-xl group'>
      <div className='bg-blue-500 p-6 pb-14'>
        <span className='text-white text-2xl'>Profile</span>
      </div>
      <div className='rounded-3xl p-6 relative -top-5 bg-white'>
        <div className='flex items-end relative -top-16 justify-between'>
          <div className='flex flex-col items-center'>
            <span className='text-sm text-gray-500'>Orders</span>
            <span className='font-medium'>340</span>
          </div>
          <div className='h-24 w-24 bg-red-400 rounded-full group-hover:bg-green-500 transition-colors'/>
          <div className='flex flex-col items-center'>
            <span className='text-sm text-gray-500'>Spent</span>
            <span className='font-medium'>$2,310</span>
          </div>
        </div>
        <div  className='relative flex items-center mt-5 flex-col -top-10 -mb-5'>
          <span className='text-lg font-medium'>Tony Molloy</span>
          <span className='text-sm text-gray-500'>미국</span>
        </div>
      </div>
    </div>

    <div className='bg-white p-6 rounded-lg shadow-xl'>
      <div className='flex mb-5 justify-between items-center'>
        <span>👈</span>
        <div className='space-x-3 '>
          <span>⭐️ 4.9</span>
          <span className='shadow-xl p-2 rounded-md'>❤️</span>
        </div>
      </div>
      <div className='bg-zinc-400 h-72 mb-5'/>
      <div className='flex flex-col'>
        <span className='font-medium text-xl'>Swoon Lounge</span>
        <span className='text-xs text-gray-500'>Chair</span>
        <div className='mt-2 mb-5 flex justify-between items-center'>
          <div className='space-x-2'>
            <button className='w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition'/>
            <button className='w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition'/>
            <button className='w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition'/>
          </div>
          <div className='flex items-center space-x-5'>
            <button className=' rounded-xl bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>-</button>
            <span>1</span>
            <button className=' rounded-xl bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500'>+</button>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <span className='font-medium text-2xl'>$450</span>
          <button className='bg-blue-500 text-center rounded-lg text-white py-2 px-8 text-s'>Add to cart</button>
        </div>
      </div>
    </div>

    <form className='flex flex-col space-y-2 p-5'>
      <input type="text" required placeholder='Username' className='border p-1 border-gray-400 rounded-lg peer' />
      <span className='hidden peer-invalid:text-red-500 peer-invalid:block'>This input is invalid</span>
      <span className='hidden peer-valid:text-blue-400 peer-valid:block'>Good</span>
      <input type="submit" value="Login" className='bg-white' />
    </form>

    <div className='flex flex-col space-y-2 p-5'>
      <details className='select-none open:text-white open:bg-indigo-500'>
        <summary className='cursor-pointer'>What is my fav. food.</summary>
        <span className='selection:bg-indigo-500 selection:'>김치</span>
      </details>

      <ul className='list-disc marker:text-red-500'>
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>

      <input type="file" className='file:border-0 file:rounded-md file:bg-purple-500 transition-colors file:cursor-pointer file:hover:text-pink-500 file:hover:bg-white file:hover:border-pink-500 file:hover:border' />

      <p className='first-letter:text-xl first-letter:hover:text-teal-500'>안녕하세요. 홍길동입니다.</p>
    </div>
  </div>;
}
