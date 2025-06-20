import React, { useState } from 'react';
import './style/contact.scss';

interface QuoteItem {
  id: string;
  name: string;
  price: number;
  category: 'design' | 'development' | 'maintenance';
}

export const Contact = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const quoteItems: QuoteItem[] = [
    // 디자인
    { id: 'logo', name: '로고 디자인', price: 300000, category: 'design' },
    { id: 'branding', name: '브랜딩 패키지', price: 800000, category: 'design' },
    { id: 'ui-design', name: 'UI/UX 디자인', price: 500000, category: 'design' },
    { id: 'print', name: '인쇄물 디자인', price: 200000, category: 'design' },
    
    // 개발
    { id: 'landing', name: '랜딩 페이지', price: 600000, category: 'development' },
    { id: 'website', name: '기업 웹사이트', price: 1500000, category: 'development' },
    { id: 'ecommerce', name: '쇼핑몰 개발', price: 2500000, category: 'development' },
    { id: 'mobile-app', name: '모바일 앱', price: 3000000, category: 'development' },
    
    // 유지보수
    { id: 'monthly', name: '월간 유지보수', price: 100000, category: 'maintenance' },
    { id: 'hosting', name: '호스팅 관리', price: 50000, category: 'maintenance' },
    { id: 'seo', name: 'SEO 최적화', price: 200000, category: 'maintenance' }
  ];

  const handleItemChange = (itemId: string, price: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
      setTotalPrice(totalPrice - price);
    } else {
      setSelectedItems([...selectedItems, itemId]);
      setTotalPrice(totalPrice + price);
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  const handleCall = () => {
    window.location.href = 'tel:010-1234-5678';
  };

  const handleMessage = () => {
    window.location.href = 'sms:010-1234-5678';
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="page-header">
          <h1>Estimate</h1>
          <p>필요한 서비스를 선택하여 견적을 확인해보세요.</p>
        </div>

        <div className="quote-section">
          <div className="quote-categories">
            <div className="category-section">
                <span className="category-title">
                    <h3>Design</h3>
                    <p>디자인 서비스를 선택하세요.</p>
                </span>
              <div className="items-grid">
                {quoteItems.filter(item => item.category === 'design').map(item => (
                  <label key={item.id} className="quote-item">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleItemChange(item.id, item.price)}
                    />
                    <div className="item-content">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">{formatPrice(item.price)}원</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="category-section">
                <span className="category-title">
                    <h3>Development</h3>
                    <p>개발 서비스를 선택하세요.</p>
                </span>
              <div className="items-grid">
                {quoteItems.filter(item => item.category === 'development').map(item => (
                  <label key={item.id} className="quote-item">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleItemChange(item.id, item.price)}
                    />
                    <div className="item-content">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">{formatPrice(item.price)}원</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="category-section">
              <span className="category-title">
                  <h3>Maintenance</h3>
                  <p>유지보수 서비스를 선택하세요.</p>
              </span>
              <div className="items-grid">
                {quoteItems.filter(item => item.category === 'maintenance').map(item => (
                  <label key={item.id} className="quote-item">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleItemChange(item.id, item.price)}
                    />
                    <div className="item-content">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">{formatPrice(item.price)}원</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="quote-summary">
            <div className="summary-card">
              <h3>견적 요약</h3>
              <div className="selected-items">
                {selectedItems.length === 0 ? (
                  <p className="no-items">선택된 항목이 없습니다</p>
                ) : (
                  selectedItems.map(itemId => {
                    const item = quoteItems.find(q => q.id === itemId);
                    return (
                      <div key={itemId} className="selected-item">
                        <span>{item?.name}</span>
                        <span>{formatPrice(item?.price || 0)}원</span>
                      </div>
                    );
                  })
                )}
              </div>
              <div className="total-price">
                <strong>총 예상 금액</strong>
                <p className="price-note">
                {formatPrice(totalPrice)}원
                </p>
              </div>
              <p className="price-note">
                정확한 견적은 상담 후 결정됩니다.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-buttons">
          <button className="contact-btn message-btn" onClick={handleMessage}>
            <span className="btn-text">문자하기</span>
          </button>
          <button className="contact-btn call-btn" onClick={handleCall}>
            <span className="btn-text">전화하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

