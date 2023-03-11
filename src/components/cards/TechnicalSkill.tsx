import React from 'react';
import { TechnicalSkillProps } from '../../interfaces';

const TechnicalSkill: React.FC<TechnicalSkillProps> = ({
  textColor,
  icon,
  text,
  outline,
  bgHover,
}) => {
  return (
    <div className={`flex duration-150 hover:scale-110 flex-col gap-3 justify-center items-center`}>
      <div
        className={`w-28 h-28 ring-2 rounded-full ${outline} ${bgHover} flex items-center justify-center`}
      >
        {React.createElement(icon, { className: `${textColor} text-5xl` })}
      </div>
      <p className={`text-center ${textColor} text-xl`}>{text}</p>
    </div>
  );
};

export default TechnicalSkill;
