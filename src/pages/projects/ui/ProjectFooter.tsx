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
      className={clsx("project-footer", className)}
      style={backgroundColor ? { background: backgroundColor } : undefined}
    >
      <div className='project-footer-container'>
        {/* Два основных блока */}
        <div className='project-footer-main-blocks'>
          {/* Левый блок - LUDEN LABS + контакты */}
          <div className='project-footer-left-block'>
            <div className='project-footer-brand'>
              <h2 className='project-footer-brand-title'>LUDEN LABS</h2>
              <p className='project-footer-brand-description'>
                мы являемся пионерами на стыке психологии и технологий для
                создания инновационных стартапов.
              </p>
            </div>
            <div className='project-footer-contacts'>
              <div className='project-footer-social-icons'>
                <a
                  href='#'
                  className='project-footer-social-icon'
                  aria-label='Twitter'
                >
                  <span>X</span>
                </a>
                <a
                  href='#'
                  className='project-footer-social-icon'
                  aria-label='Facebook'
                >
                  <span>f</span>
                </a>
                <a
                  href='#'
                  className='project-footer-social-icon'
                  aria-label='LinkedIn'
                >
                  <span>in</span>
                </a>
              </div>
              <a
                href='mailto:prosenfeld@gmail.com'
                className='project-footer-email'
              >
                prosenfeld@gmail.com
              </a>
            </div>
          </div>

          {/* Правый блок - Форма + Навигация */}
          <div className='project-footer-right-block'>
            {/* Форма обратной связи */}
            <div className='project-footer-form-wrapper'>
              <h3 className='project-footer-form-title'>СВЯЗАТЬСЯ С НАМИ</h3>
              <form onSubmit={handleSubmit} className='project-footer-form'>
                <div className='project-footer-form-row'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Имя*'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='project-footer-input'
                  />
                </div>
                <div className='project-footer-form-row'>
                  <input
                    type='text'
                    name='contact'
                    placeholder='Контакт для связи*'
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    className='project-footer-input'
                  />
                </div>
                <div className='project-footer-form-row'>
                  <textarea
                    name='comment'
                    placeholder='Комментарий'
                    value={formData.comment}
                    onChange={handleInputChange}
                    rows={3}
                    className='project-footer-textarea'
                  />
                </div>
                <div className='project-footer-form-actions'>
                  <label className='project-footer-checkbox-label'>
                    <input
                      type='checkbox'
                      checked={formData.agreement}
                      onChange={handleCheckboxChange}
                      className='project-footer-checkbox'
                    />
                    <span className='project-footer-checkbox-text'>
                      Я согласен/на на обработку <u>персональных данных</u> и{" "}
                      <u>политикой конфиденциальности</u>
                    </span>
                  </label>
                  <button type='submit' className='project-footer-submit-btn'>
                    Отправить
                  </button>
                </div>
              </form>
            </div>

            {/* Навигация: Кейсы и Компания */}
            <div className='project-footer-middle-section'>
              <div className='project-footer-column'>
                <h3 className='project-footer-column-title'>Кейсы</h3>
                <nav className='project-footer-nav'>
                  <a href='#medicine' className='project-footer-link'>
                    Медицина
                  </a>
                  <a href='#education' className='project-footer-link'>
                    Образование
                  </a>
                  <a href='#business' className='project-footer-link'>
                    Бизнес
                  </a>
                  <a href='#charity' className='project-footer-link'>
                    Благотворительность
                  </a>
                </nav>
              </div>

              <div className='project-footer-column'>
                <h3 className='project-footer-column-title'>Компания</h3>
                <nav className='project-footer-nav'>
                  <a href='#services' className='project-footer-link'>
                    Услуги
                  </a>
                  <a href='#contacts' className='project-footer-link'>
                    Контакты
                  </a>
                  <a href='#about' className='project-footer-link'>
                    О нас
                  </a>
                  <a href='#psychotechnology' className='project-footer-link'>
                    Психотехнология
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Разделительная линия */}
        <div className='project-footer-divider'></div>

        {/* Нижняя часть - Юридическая информация */}
        <div className='project-footer-bottom'>
          <div className='project-footer-bottom-links'>
            <a href='#privacy' className='project-footer-bottom-link'>
              Политика конфиденциальности
            </a>
            <a href='#inn' className='project-footer-bottom-link'>
              ИНН
            </a>
            <a href='#agreement' className='project-footer-bottom-link'>
              Согласие на обработку персональных данных
            </a>
          </div>
          <p className='project-footer-copyright'>2025. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
