'use client'; // クライアントサイドでの実行を明示

import { AccordionItem } from '@/app/components/tool/AccordionItem';
import { FormDefault } from '@/app/SettingPage/components/FormDefault';
import { QuestionDefault } from '@/app/SettingPage/components/QuestionDefault';
import { useState } from 'react';

export const Default = () => {
  const [formDefaultAccordion, setFormDefaultAccordion] =
    useState<boolean>(false);

  const [questionDefaultAccordion, setQuestionDefaultAccordion] =
    useState<boolean>(false);

  return (
    <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
      <h1 className='text-xl pb-4 border-b border-b-slate-300'>デフォルト</h1>

      {/* ◆フォームのデフォルト設定 */}
      <div className=' py-8 border-b border-b-slate-300'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <h2 className='text-lg'>フォームのデフォルト設定</h2>
            <p className='text-gray-500'>
              設定はこのフォームと新しいフォームに適用されます
            </p>
          </div>

          <AccordionItem
            isExpanded={formDefaultAccordion}
            onClick={() => setFormDefaultAccordion((prev) => !prev)}
          />
        </div>

        {/* 細かな設定 */}
        <FormDefault formDefaultAccordion={formDefaultAccordion} />
      </div>

      {/* ◆質問のデフォルト設定 */}
      <div className=' py-8 border-b border-b-slate-300'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <h2 className='text-lg'>質問のデフォルト設定</h2>
            <p className='text-gray-500'>
              設定はすべての新しい質問に適用されます
            </p>
          </div>

          <AccordionItem
            isExpanded={questionDefaultAccordion}
            onClick={() => setQuestionDefaultAccordion((prev) => !prev)}
          />
        </div>
        {/* 細かな設定 */}
        <QuestionDefault questionDefault={questionDefaultAccordion} />{' '}
      </div>
    </div>
  );
};
