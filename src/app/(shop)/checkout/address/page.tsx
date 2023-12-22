import { Title } from '@/components';
import Link from 'next/link';

export default function () {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">



      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        
        <Title title="Address" subtitle="¿What´s your delivery address?" />

        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">


          <div className="flex flex-col mb-2">
            <span>Name</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200 focus:outline-violet-500"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Lastname</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200 focus:outline-violet-500"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Address</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200 focus:outline-violet-500"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Address 2</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200 focus:outline-violet-500"
            />
          </div>


          <div className="flex flex-col mb-2">
            <span>Postal code</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200 focus:outline-violet-500"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>City</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200 focus:outline-violet-500"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Country</span>
            <select 
              className="p-2 border rounded-md bg-gray-200 focus:outline-violet-500"
            >
              <option value="">[ Seleccione ]</option>
              <option value="CO">Colombia</option>
              <option value="USA">Estados Unidos</option>
            </select>
          </div>

          <div className="flex flex-col mb-2">
            <span>Phone number</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200 focus:outline-violet-500"
            />
          </div>



          <div className="flex flex-col mb-2 sm:mt-10">
            <Link 
              href='/checkout'
              className="bg-violet-500 p-2 rounded text-white flex w-full sm:w-1/2 justify-center ">
              Next</Link>
          </div>


        </div>

      </div>




    </div>
  );
}