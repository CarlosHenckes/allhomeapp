import SliderComponent from 'rsuite/RangeSlider';
import 'rsuite/dist/rsuite.css';

const RangeSlider = (location, k, v) => {

    const map = {
        'temperature': {'min': -10, 'max': 50, 'marks': [-10, 50]}, 
        'humidity': {'min': 0, 'max': 100, 'marks': [0, 100]}, 
        'barometer': {'min': 920, 'max': 940, 'marks': [920, 940]}, 
        'altitude': {'min': 0, 'max': 1000, 'marks': [1, 1000]}
    };

      return(
        <div id={'id_'+ location + k} key={'key' + location + k} className="card-limits">
            <span className="card-limits-title">{k}</span>
            <div className="card-limits-slider">
                <SliderComponent name={'nm-' + location + k} id={'id-' + location + k}
                    defaultValue={[v.min, v.max]} 
                    step={1}
                    tooltip={true}
                    graduated={false}
                    progress={true}
                    max={map[k]['max']} 
                    min={map[k]['min']} 
                    renderMark={mark => {
                        if (map[k]['marks'].includes(mark)) {
                          return mark;
                      }}
                    }
                    onChange={([mi, ma]) => {
                        console.log(mi + '-' + ma);
                    }}
                />
            </div>
        </div>
      )
}

export default RangeSlider;