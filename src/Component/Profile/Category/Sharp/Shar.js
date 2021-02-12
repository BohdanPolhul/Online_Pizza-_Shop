import React from 'react';
const Shar = (props) => {
  return (
    <div>
      <h1>Гострі</h1>
      <div className="basic_container">
        <div className="b_container">
          {props.props.Pizza_Sharp.map(value=><div>                
                    <div className="b_c_block_1">
                      <img className="img_height" width="100%" src={value.url} alt="Pizza logo" />
                      <h2 className="h2_center">Чизбургер-пицца</h2>
                      <div class="pizza-block__selector">
                        <ul>
                          <li class="active">тонкое</li>
                          <li>традиционное</li>
                        </ul>
                        <ul>
                          <li class="active">26 см.</li>
                          <li>30 см.</li>
                          <li>40 см.</li>
                        </ul>
                      </div>
                      <div className="cought">
                        <h2>Від {value.price} ₽ </h2>
                        <div onClick={value.add} className="add_pay">
                          <h3>+Добавити</h3>
                          <i>{value.name}</i>
                        </div>
                      </div>
                </div>
          </div>)}
        </div>
      </div>
        
    </div>
  );
};

export default Shar;
