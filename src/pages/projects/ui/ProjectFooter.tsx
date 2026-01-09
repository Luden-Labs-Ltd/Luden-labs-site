import { useState } from "react";
import clsx from "clsx";

interface ProjectFooterProps {
  className?: string;
}

export function ProjectFooter({ className }: ProjectFooterProps) {
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
    <footer className={clsx("project-footer", className)}>
      <div className='project-footer-container'>
        {/* Верхняя часть футера */}
        <div className='project-footer-top'>
          {/* Левая колонка - Luden Labs */}
          <div className='project-footer-brand'>
            <h2 className='project-footer-brand-title'>LUDEN LABS</h2>
            <p className='project-footer-brand-description'>
              мы являемся пионерами на стыке психологии и технологий для
              создания инновационных стартапов.
            </p>
          </div>

          {/* Колонка Компания */}
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

          {/* Колонка Бизнес */}
          <div className='project-footer-column'>
            <h3 className='project-footer-column-title'>Бизнес</h3>
            <nav className='project-footer-nav'>
              <a
                href='#cases'
                className='project-footer-link project-footer-link-bold'
              >
                Кейсы
              </a>
              <a href='#medicine' className='project-footer-link'>
                Медицина
              </a>
              <a href='#education' className='project-footer-link'>
                Образование
              </a>
              <a href='#charity' className='project-footer-link'>
                Благотворительность
              </a>
            </nav>
          </div>

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
                    Я согласен/на на обработку персональных данных и политикой
                    конфиденциальности
                  </span>
                </label>
                <button type='submit' className='project-footer-submit-btn'>
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Блок контактов */}
        <div className='project-footer-contacts'>
          <div className='project-footer-social'>
            {/* TODO: Добавить иконки социальных сетей */}
            <div className='project-footer-social-icons'>
              {/* Placeholder для иконок */}
            </div>
          </div>
          <a
            href='mailto:prosenfeld@gmail.com'
            className='project-footer-email'
          >
            prosenfeld@gmail.com
          </a>
        </div>

        {/* Разделительная линия */}
        <div className='project-footer-divider'></div>

        {/* Нижняя часть футера */}
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
