
import builder from '../json/buider.json'
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Swper from './Swiper'
export default function SectionBuilderComponent() {
    return (<>
        <div >
     
            {builder.page_sections && builder.page_sections.length != 0 && builder.page_sections.map((section, index) => {
                return (<div key={index} style={{display:"flex"}}>
                    {section.layout_json && section.layout_json.length != 0 && section.layout_json.map((layout, layout_index) => {
                        return (
                            <div key={layout_index} style={{ flex: `0 0 ${layout.width}` }}>
                                {layout.components && layout.components.length != 0 && layout.components.map((component, index_) => {
                                    return (<div key={index_}>
                                        {component.component_title == "Image" &&
                                        <div style={{textAlign: 'center',paddingInline:"20px"}}>
                                             <Image height={450} width={750}
                                                    className="d-block w-100"
                                                    src={component.image}
                                                    alt="First slide"
                                                    style={{borderRadius:"10px"}}
                                                />
                                        </div>
                                               
                                            }
                                        {/* {component.component_title == "Accordion Style1" && component.data && component.data.data &&
                                            <div style={{paddingInline:"20px"}}>
                                                {component.data.data.map((item, item_index) => {
                                                    return (<Accordion defaultActiveKey="0" key={item_index}>
                                                        <Accordion.Item eventKey={index_}>
                                                            <Accordion.Header>{item.title}</Accordion.Header>
                                                            <Accordion.Body>
                                                                {item.content}
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>)
                                                })}
                                            </div>} */}
                                        {component.component_title == "Title" &&
                                            <h1 style={{ textAlign: 'center' }}>
                                            {component.title}
                                        </h1>}
                                        {/* {component.component_title == "Slider With Image" && component.data && component.data.data &&
                                            <Carousel fade>
                                                {component.data.data.map((item, item_index) => {
                                                    return (
                                                        <Carousel.Item key={item_index}>
                                                            <Image height={600} width={1700}
                                                                className="d-block w-100"
                                                                src={item.image}
                                                                alt="First slide"
                                                            />
                                                            <Carousel.Caption>
                                                                <h3>First slide label</h3>
                                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                            </Carousel.Caption>
                                                        </Carousel.Item>
                                                    )
                                                })}
                                            </Carousel>} */}
                                            {component.component_title == "Articles Type1" && component.data && component.data.data &&
                                                component.data.data.map((item, item_index) => {
                                                    return (
                                                        <div style={{display:"flex",gap:"10px",alignItems:'center',justifyContent:'space-between'}} 
                                                        key={item_index} className='article'>
                                                            <div style={{flex:"0 0 20%"}}>
                                                            <Image 
                                                            style={{borderRadius:"10px"}}
                                                                height={120} width={200}
                                                                className="d-block w-100"
                                                                src={item.image}
                                                                alt="First slide"/>
                                                            </div>
                                                           
                                                            <div style={{display:"flex",flex:"0 0 70%", flexDirection:'column',justifyContent:"space-between",height:"85px"}}>
                                                                <div style={{display:"flex",gap:"5px"}}>
                                                                    <p style={{margin:"0"}} className='title'>{item.title}</p>
                                                                    <p style={{margin:"0"}} className='subtitle'>{item.subtitle}</p>
                                                                </div>
                                                                <p className='content webkit-text line-2'>{item.content}</p>
                                                                <div style={{display:"flex",gap:"5px",marginBottom:"5px"}}>
                                                                    <p style={{margin:"0"}} className='posted_on'>{item.title}</p>
                                                                    <p style={{margin:"0"}} className='hashtag'>{item.subtitle}</p>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                icon
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                           }
                                           {component.component_title == "Articles Type2" && component.data && component.data.data &&
                                                component.data.data.map((item, item_index) => {
                                                    return (
                                                        <div className='article1' style={{marginBottom:'10px'}} key={item_index}>
                                                            <div>
                                                            <Image 
                                                            style={{borderRadius:"10px"}}
                                                                height={300} width={500}
                                                                className="d-block w-100"
                                                                src={item.image}
                                                                alt="First slide"/>
                                                            </div>
                                                            <div style={{display:"flex", flexDirection:'column',justifyContent:"space-between"}}>                                            
                                                               <p className='content webkit-text'>{item.content}</p>                                                          
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                           }
                                            {component.component_title == "List With Header" && component.data && component.data.data &&
                                              <div style={{margin:"20px",marginTop:"0",border: "1px solid #DCDCDC"}} className='list_with_header'>
                                                <div style={{display:"flex",gap:"10px",padding:"10px",borderBottom:"1px solid #DCDCDC",justifyContent:"space-between"}}>
                                                <div style={{display:"flex",gap:'10px'}}>
                                                        <Image 
                                                        style={{borderRadius:"5px"}}
                                                            height={35} width={35}
                                                            className="d-block w-100"
                                                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                                                            alt="First slide"/>
                                                        <div style={{}}>
                                                    <h6 style={{margin:"0px"}} className='head_title'>Title</h6>
                                                    <p style={{margin:"0px"}} className='head_subtitle'>Subtitle</p>
                                                </div>
                                                </div>
                                                <div style={{flex:1}}>
                                                    <button className='secondary_button'>See All</button>
                                                </div>
                                                <div></div>
                                                </div>
                                                 {component.data.data.map((item, item_index) => {
                                                    return (
                                                        <div style={{display:"flex",gap:"10px"}} className='article' key={index}>
                                                        <div style={{flex:"0 0 20%"}}>
                                                        <Image 
                                                        style={{borderRadius:"10px"}}
                                                            height={70} width={80}
                                                            className="d-block w-100"
                                                            src={item.image}
                                                            alt="First slide"/>
                                                        </div>
                                                       
                                                        <div style={{display:"flex", flexDirection:'column',justifyContent:"space-between"}}>
                                                            <p className='content webkit-text line-3'>{item.content}</p>
                                                            <div style={{display:"flex",gap:"5px",marginBottom:"5px"}}>
                                                                <p style={{margin:"0"}} className='posted_on'>{item.title}</p>
                                                                <p style={{margin:"0"}} className='hashtag'>{item.subtitle}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                                })}
                                              </div>
                                                
                                           }
                                    </div>)
                                })}
                            </div>)
                    })}
                </div>)
            })
            }
            <div >

            </div>
        </div>
        <Swper/>
    </>)
}