import './Divider.scss';
import VYellow from '../../assets/img/v-yellow.png';
import Dog2 from '../../assets/img/dog-2.png';

const Divider = () => {
  return (
    <div className="divider" aria-hidden="true">
      <img src={VYellow} alt="" className="divider__wave" />
      <img src={Dog2} alt="Mascota" className="divider__dog" />
    </div>
  );
};

export default Divider;
