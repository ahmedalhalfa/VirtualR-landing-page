import codeImg from '../assets/code.jpg';
import { checklistItems } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Workflow = () => {
  return (
    <div id="Workflow" className="mt-20 scroll-mt-16">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{' '}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="code" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => {
            return (
              <div key={index} className="flex mb-12">
                <div className="flex items-center justify-center bg-neutral-900 text-green-400 mx-6 rounded-full h-10 w-10 p-2">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="text-xl mt-1 mb-2">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
