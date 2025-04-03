// src/components/WriteupPage.jsx
import { gameQuestions } from "../assets/gameData";
import { Transition, Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

function WriteupPage() {
	return (
	  <div className="m-8 p-8 rounded-lg max-w-4xl mx-auto bg-gray-50 min-h-screen w-full">
		<h1 className="text-4xl font-bold text-center text-gray-900 mb-10 border-b pb-4">
		  Game Questions Breakdown
		</h1>
  
		{gameQuestions.map((question, index) => (
		  <Disclosure
			key={question.id}
			as="div"
			className="mb-6 w-full" // Added w-full here to fix the width problem.
		  >
			{({ open }) => (
			  <>
				<Disclosure.Button className="flex justify-between w-full p-6 bg-white rounded-lg shadow-md mb-2">
				  <div className="flex items-center">
					<h2 className="text-xl font-semibold text-gray-700 mr-2">
					  Question {index + 1}:
					</h2>
					<p className=" text-gray-400">
						{question.summary}
					</p>
				  </div>
				  <ChevronUpIcon
					className={`${open ? '' : 'transform rotate-180'} w-5 h-5 text-gray-400`}
				  />
				</Disclosure.Button>
				<Transition
				  show={open}
				  enter="transition-opacity duration-75"
				  enterFrom="opacity-0"
				  enterTo="opacity-100"
				  leave="transition-opacity duration-150"
				  leaveFrom="opacity-100"
				  leaveTo="opacity-0"
				>
				  <Disclosure.Panel className="p-6 bg-white rounded-lg shadow-md">
					<div className="mb-6 border-b pb-4">
					  <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
						{question.question}
					  </h3>
					</div>
  
					{question.articleLinks && question.articleLinks.length > 0 && (
					  <div className="mb-4">
						<h3 className="text-lg font-medium text-gray-700 mb-2">Related Articles:</h3>
						<ul className="list-disc list-inside pl-4 space-y-1">
						  {question.articleLinks.map((article, articleIndex) => (
							<li key={articleIndex}>
							  <a
								href={article.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
							  >
								{article.title}
							  </a>
							</li>
						  ))}
						</ul>
					  </div>
					)}
  
					{question.writeup && (
					  <div className="mb-5 p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-md">
						<p className="text-sm text-gray-700 italic">{question.writeup}</p>
					  </div>
					)}
  
					<div>
					  <h3 className="text-lg font-medium text-gray-700 mb-3">Options:</h3>
					  <div className="space-y-5">
						{question.options.map((option) => (
						  <div key={option.id} className="p-4 border border-gray-200 rounded-md bg-gray-50">
							<p className="font-semibold text-gray-800 mb-2">{option.text}</p>
							<div className="mb-2 pl-4 border-l-2 border-green-500">
							  <p className="text-sm text-gray-700 whitespace-pre-wrap">{option.outcome.trim()}</p>
							</div>
							<div className="text-sm mt-3">
							  <span className="font-medium text-red-600">Data Leaks:</span>
							  <span className="ml-2 text-red-700">
								{option.leaks && option.leaks.length > 0 ? option.leaks.join(', ') : 'None'}
							  </span>
							</div>
							<div className="text-sm mt-1">
							  <span className="font-medium text-indigo-600">Satisfaction Points:</span>
							  <span className="ml-2 text-indigo-700">{option.satisfactionPoints}</span>
							</div>
						  </div>
						))}
					  </div>
					</div>
				  </Disclosure.Panel>
				</Transition>
			  </>
			)}
		  </Disclosure>
		))}
	  </div>
	);
  }


export default WriteupPage;