import { useState } from "react";
import clsx from "clsx";

interface ProjectFooterProps {
  className?: string;
  backgroundColor?: string;
}

export function ProjectFooter({
  className,
  backgroundColor,
}: ProjectFooterProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    comment: "",
    agreement: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreement: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  return (
    <footer
      className={clsx("w-full overflow-x-hidden", className)}
      style={backgroundColor ? { background: backgroundColor } : undefined}
    >
      <div className='max-w-full w-full mx-auto px-4 md:px-[clamp(20px,4vw,40px)] lg:px-[clamp(40px,5vw,60px)] xl:px-[clamp(60px,6vw,80px)] 2xl:px-[clamp(102.68px,5.35vw,103px)] relative box-border'>
        {/* Два основных блока */}
        <div className='flex flex-col md:flex-row gap-[40px] md:gap-[50px] lg:gap-[60px] xl:gap-[80px] 2xl:gap-[clamp(80px,8.33vw,160px)] py-[40px] md:py-[60px] lg:py-[80px] 2xl:py-[clamp(40px,5.36vw,103px)] pb-[20px] md:pb-[30px] lg:pb-[40px] 2xl:pb-[clamp(40px,3.65vw,70px)] items-start'>
          {/* Левый блок - LUDEN LABS + контакты */}
          <div className='flex flex-col gap-[clamp(20px,2.08vw,40px)] flex-shrink-0'>
            <div className='flex flex-col gap-[clamp(20px,2.08vw,40px)]'>
              <h2 className='font-days-one font-normal text-[clamp(24px,1.875vw,36px)] leading-[1.273] uppercase text-black m-0'>
                LUDEN LABS
              </h2>
              <p className='font-sans font-normal text-[clamp(16px,1.09vw,21px)] leading-[1.21] text-black m-0 max-w-[400px]'>
                мы являемся пионерами на стыке психологии и технологий для
                создания инновационных стартапов.
              </p>
            </div>
            <div className='flex flex-col gap-[clamp(20px,2.08vw,35px)] mt-[clamp(20px,2.08vw,40px)]'>
              <div className='flex gap-[clamp(12px,1.04vw,20px)]'>
                <a
                  href='#'
                  className='w-[clamp(40px,3.13vw,60px)] h-[clamp(40px,3.13vw,60px)] border border-black rounded-full flex items-center justify-center no-underline text-black font-sans font-normal text-[clamp(16px,1.25vw,24px)] transition-colors hover:bg-black hover:text-white'
                  aria-label='Twitter'
                >
                  <span>X</span>
                </a>
                <a
                  href='#'
                  className='w-[clamp(40px,3.13vw,60px)] h-[clamp(40px,3.13vw,60px)] border border-black rounded-full flex items-center justify-center no-underline text-black font-sans font-normal text-[clamp(16px,1.25vw,24px)] transition-colors hover:bg-black hover:text-white'
                  aria-label='Facebook'
                >
                  <span>f</span>
                </a>
                <a
                  href='#'
                  className='w-[clamp(40px,3.13vw,60px)] h-[clamp(40px,3.13vw,60px)] border border-black rounded-full flex items-center justify-center no-underline text-black font-sans font-normal text-[clamp(16px,1.25vw,24px)] transition-colors hover:bg-black hover:text-white'
                  aria-label='LinkedIn'
                >
                  <span>in</span>
                </a>
              </div>
              <a
                href='mailto:prosenfeld@gmail.com'
                className='font-sans font-normal text-[clamp(16px,1.09vw,21px)] leading-[1.21] text-black no-underline transition-colors hover:text-[#444444]'
              >
                prosenfeld@gmail.com
              </a>
            </div>
          </div>

          {/* Правый блок - Форма + Навигация */}
          <div className='flex flex-col gap-[clamp(40px,4.17vw,60px)] flex-1'>
            {/* Форма обратной связи */}
            <div className='flex flex-col gap-[clamp(20px,1.51vw,29px)] w-full max-w-[994.32px]'>
              <h3 className='font-days-one font-normal text-[clamp(28px,2.19vw,42px)] leading-[1.273] uppercase text-black m-0 mb-[clamp(20px,1.51vw,29px)]'>
                СВЯЗАТЬСЯ С НАМИ
              </h3>
              <form onSubmit={handleSubmit} className='flex flex-col gap-[clamp(16px,1.25vw,24px)]'>
                <div className='w-full'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Имя*'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full font-sans font-normal text-[clamp(14px,1.09vw,21px)] leading-[1.21] text-[#4d4d4d] p-[clamp(10px,0.73vw,14px)] px-[clamp(20px,2.08vw,40px)] border border-[#4d4d4d] rounded-[10px] bg-transparent outline-none transition-colors box-border focus:border-[#444444] placeholder:text-[#4d4d4d]'
                  />
                </div>
                <div className='w-full'>
                  <input
                    type='text'
                    name='contact'
                    placeholder='Контакт для связи*'
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    className='w-full font-sans font-normal text-[clamp(14px,1.09vw,21px)] leading-[1.21] text-[#4d4d4d] p-[clamp(10px,0.73vw,14px)] px-[clamp(20px,2.08vw,40px)] border border-[#4d4d4d] rounded-[10px] bg-transparent outline-none transition-colors box-border focus:border-[#444444] placeholder:text-[#4d4d4d]'
                  />
                </div>
                <div className='w-full'>
                  <textarea
                    name='comment'
                    placeholder='Комментарий'
                    value={formData.comment}
                    onChange={handleInputChange}
                    rows={3}
                    className='w-full font-sans font-normal text-[clamp(14px,1.09vw,21px)] leading-[1.21] text-[#4d4d4d] p-[clamp(10px,0.73vw,14px)] px-[clamp(20px,2.08vw,40px)] border border-[#4d4d4d] rounded-[10px] bg-transparent outline-none transition-colors box-border resize-y min-h-[80px] focus:border-[#444444] placeholder:text-[#4d4d4d]'
                  />
                </div>
                <div className='flex flex-col md:flex-row items-start justify-center gap-[20px] md:gap-[clamp(20px,7.76vw,149px)] w-full flex-wrap'>
                  <label className='flex items-start gap-[10px] cursor-pointer w-full md:w-auto max-w-full md:max-w-[481px] flex-1 min-w-0 md:min-w-[200px] leading-[1.3]'>
                    <input
                      type='checkbox'
                      checked={formData.agreement}
                      onChange={handleCheckboxChange}
                      className='w-[20px] h-[20px] min-w-[20px] border border-[#a1a1aa] rounded-[2px] bg-transparent cursor-pointer mt-0 flex-shrink-0 checked:bg-black checked:border-black'
                    />
                    <span className='font-sans font-normal text-[clamp(14px,0.94vw,18px)] leading-[1.3] text-black'>
                      Я согласен/на на обработку <u>персональных данных</u> и{" "}
                      <u>политикой конфиденциальности</u>
                    </span>
                  </label>
                  <button
                    type='submit'
                    className='font-sans font-normal text-[clamp(14px,1.09vw,21px)] leading-[1.21] text-black p-[clamp(10px,0.73vw,14px)] px-[clamp(20px,2.08vw,40px)] border border-black rounded-[10px] bg-transparent cursor-pointer transition-colors whitespace-nowrap flex-shrink-0 hover:bg-black hover:text-white w-full md:w-auto'
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>

            {/* Навигация: Кейсы и Компания */}
            <div className='flex flex-row items-start gap-[clamp(60px,3.13vw,100px)] w-full'>
              <div className='flex flex-col gap-0 w-auto flex-shrink-0'>
                <h3 className='font-days-one font-normal text-[clamp(16px,1.46vw,28px)] leading-[1.273] text-black m-0 mb-[clamp(20px,2.35vw,45.21px)]'>
                  Кейсы
                </h3>
                <nav className='flex flex-col gap-0'>
                  <a
                    href='#medicine'
                    className='font-sans font-normal text-[clamp(12px,1.09vw,21px)] leading-[1.21] text-[#444444] no-underline transition-colors mb-[clamp(10px,0.83vw,16px)] hover:text-black'
                  >
                    Медицина
                  </a>
                  <a
                    href='#education'
                    className='font-sans font-normal text-[clamp(12px,1.09vw,21px)] leading-[1.21] text-[#444444] no-underline transition-colors mb-[clamp(10px,0.83vw,16px)] hover:text-black'
                  >
                    Образование
                  </a>
                  <a
                    href='#business'
                    className='font-sans font-normal text-[clamp(12px,1.09vw,21px)] leading-[1.21] text-[#444444] no-underline transition-colors mb-[clamp(10px,0.83vw,16px)] hover:text-black'
                  >
                    Бизнес
                  </a>
                  <a
                    href='#charity'
                    className='font-sans font-normal text-[clamp(12px,1.09vw,21px)] leading-[1.21] text-[#444444] no-underline transition-colors mb-[clamp(10px,0.83vw,16px)] hover:text-black'
                  >
                    Благотворительность
                  </a>
                </nav>
              </div>

              <div className='flex flex-col gap-0 w-auto flex-shrink-0'>
                <h3 className='font-days-one font-normal text-[clamp(16px,1.46vw,28px)] leading-[1.273] text-black m-0 mb-[clamp(20px,2.35vw,45.21px)]'>
                  Компания
                </h3>
                <nav className='flex flex-col gap-0'>
                  <a
                    href='#services'
                    className='font-sans font-normal text-[clamp(12px,1.09vw,21px)] leading-[1.21] text-[#444444] no-underline transition-colors mb-[clamp(10px,0.83vw,16px)] hover:text-black'
                  >
                    Услуги
                  </a>
                  <a
                    href='#contacts'
                    className='font-sans font-normal text-[clamp(12px,1.09vw,21px)] leading-[1.21] text-[#444444] no-underline transition-colors mb-[clamp(10px,0.83vw,16px)] hover:text-black'
                  >
                    Контакты
                  </a>
                  <a
                    href='#about'
                    className='font-sans font-normal text-[clamp(12px,1.09vw,21px)] leading-[1.21] text-[#444444] no-underline transition-colors mb-[clamp(10px,0.83vw,16px)] hover:text-black'
                  >
                    О нас
                  </a>
                  <a
                    href='#psychotechnology'
                    className='font-sans font-normal text-[clamp(12px,1.09vw,21px)] leading-[1.21] text-[#444444] no-underline transition-colors mb-[clamp(10px,0.83vw,16px)] hover:text-black'
                  >
                    Психотехнология
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Разделительная линия */}
        <div className='w-screen h-[1px] bg-[#4d4d4d] my-[clamp(30px,2.5vw,48px)] mx-[calc(-50vw+50%)] relative'></div>

        {/* Нижняя часть - Юридическая информация */}
        <div className='flex flex-row justify-between items-start gap-[clamp(40px,8.33vw,160px)] pb-[clamp(30px,2.5vw,48px)] max-md:flex-col max-md:gap-[20px]'>
          <div className='flex flex-col gap-[clamp(8px,0.52vw,10px)] max-md:w-full max-md:flex-col max-md:gap-[10px]'>
            <a
              href='#privacy'
              className='font-sans font-normal text-[clamp(14px,0.83vw,16px)] leading-[1.21] text-black no-underline transition-colors hover:text-[#444444]'
            >
              Политика конфиденциальности
            </a>
            <a
              href='#inn'
              className='font-sans font-normal text-[clamp(14px,0.83vw,16px)] leading-[1.21] text-black no-underline transition-colors hover:text-[#444444]'
            >
              ИНН
            </a>
            <a
              href='#agreement'
              className='font-sans font-normal text-[clamp(14px,0.83vw,16px)] leading-[1.21] text-black no-underline transition-colors hover:text-[#444444]'
            >
              Согласие на обработку персональных данных
            </a>
          </div>
          <p className='font-sans font-normal text-[clamp(14px,0.83vw,16px)] leading-[1.21] text-black m-0 whitespace-nowrap max-md:w-full max-md:text-left'>
            2025. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
