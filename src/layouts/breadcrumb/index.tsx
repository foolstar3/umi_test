import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Breadcrumb, Badge, Icon } from 'antd';
import {Link} from 'umi';



const Breadcrumbs = ({ breadcrumbs }) => (
  <>
  <Breadcrumb separator=">" className="spread">
          {breadcrumbs.map((breadcrumb, index) => {
            // console.log(breadcrumb);
            
            return (
            <Breadcrumb.Item key={breadcrumb.key}>
              {/* {breadcrumbs.length - 1 === index ? (
                <Badge status="processing" text={breadcrumb} />
              ) : (
                <Link
                  to="/a"
                  // to={{
                  //   pathname: breadcrumb.props.match.url,
                  //   state: breadcrumb.props.match.params ? breadcrumb.props.match.params : {},
                  //   query: breadcrumb.props.location.query ? breadcrumb.props.location.query : {},
                  // }}
                >
                  {breadcrumb}
                </Link>
              )} */}
              <Link to={breadcrumb.key}>{breadcrumb.breadcrumb.props.children}</Link>
            </Breadcrumb.Item>
          )})}
        </Breadcrumb>
    {/* {breadcrumbs.map(({ breadcrumb }) => breadcrumb)} */}
  </>
)

export default withBreadcrumbs()(Breadcrumbs);
