
import bugImgUrl from '../../assets/images/Bug.svg'
import ideaImgUrl from '../../assets/images/Idea.svg'
import thoughtImgUrl from '../../assets/images/Thought.svg'

import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG:{
    title: "Problema",
    image:{
      src: bugImgUrl,
      alt: 'Imagem de um inseto',
    }
  },
  IDEA: {
    title: 'Ideia',
    image:{
      src: ideaImgUrl,
      alt: 'Imagem de uma lâmpada',
    }
  },
  OTHER: {
    title: 'Outro',
    image:{
      src: thoughtImgUrl,
      alt: 'Imagem de um balão de pensamento',
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback(){
    setFeedbackType(null)
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
        {!feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
        ) : (
          <FeedbackContentStep 
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}/>
        )}

        <footer className="text-xs text-neutral-400">
          Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/MattSilverio">Matheus Silverio</a>
        </footer>
    </div>
  );
}