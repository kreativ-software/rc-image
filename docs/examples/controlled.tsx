import Image from 'rc-image';
import * as React from 'react';
import '../../assets/index.less';

export default function Base() {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => {
            setVisible(true);
          }}
        >
          Switch Preview
        </button>
      </div>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width={200}
        fetchpriority="high"
        loading="eager"
        preview={{
          visible,
          onVisibleChange: value => {
            setVisible(value);
          },
        }}
      />
      <Image
        src={require('./images/2.jpeg')}
        width={200}
        fetchpriority="low"
        loading={'lazy'}
        preview={{
          visible,
          onVisibleChange: value => {
            setVisible(value);
          },
        }}
      />
    </div>
  );
}
