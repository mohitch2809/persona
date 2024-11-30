import React, { useState } from 'react';
import Header from './components/Header';
import OutputCard from './components/OutputCard';
import VideoIcon from './components/icons/VideoIcon';
import ImageIcon from './components/icons/ImageIcon';
import TextualIcon from './components/icons/TextualIcon';
import AudioIcon from './components/icons/AudioIcon';

const outputs = [
  {
    id: 'videos',
    title: 'Videos',
    icon: <VideoIcon />
  },
  {
    id: 'images',
    title: 'Images',
    icon: <ImageIcon />
  },
  {
    id: 'textual',
    title: 'Textual',
    icon: <TextualIcon />
  },
  {
    id: 'audio',
    title: 'Audio',
    icon: <AudioIcon />
  }
];

function App() {
  const [selectedOutputs, setSelectedOutputs] = useState(new Set([]));

  const toggleOutput = (output) => {
    const newSelected = new Set(selectedOutputs);
    if (newSelected.has(output)) {
      newSelected.delete(output);
    } else {
      newSelected.add(output);
    }
    setSelectedOutputs(newSelected);
  };

  return (
    <div className="min-h-screen bg-gradient-custom p-8">
      <div className="max-w-2xl mx-auto">
        <Header />
        
        <div className="text-center mb-16">
          <h2 className="text-white text-2xl font-medium mb-2">
            What kind of Outputs do you want this Persona to Generate?
          </h2>
          <p className="text-gray-400 text-lg">
            You can select one, multiple or all Outcome types
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16 justify-items-center mb-16">
          {outputs.map((output) => (
            <OutputCard
              key={output.id}
              icon={output.icon}
              title={output.title}
              isSelected={selectedOutputs.has(output.id)}
              onClick={() => toggleOutput(output.id)}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#8240E4] hover:bg-[#6e35c3] text-white px-8 py-3 rounded-2xl text-lg font-medium transition-colors duration-300">
            Start Creating Persona
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;