import { FormWebsiteContainer } from "../../styled/FormWebsiteContainer.styled";
import { WebsiteCategoryButton } from "../../styled/WebsiteCategoryButton.styled";
import { SiWoo, SiWordpress } from "react-icons/si";
import { AiFillCloseSquare } from "react-icons/ai";

const AddWebsite = ({ formState, formChange, closeOverlay }) => {
  return (
    <FormWebsiteContainer
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <AiFillCloseSquare onClick={closeOverlay} className="closeWebsiteForm" />
      <h1>Add website</h1>
      <label>
        <h2>URL</h2>
        <span>The URL of your website. Don't include http or https.</span>
        <input
          type="text"
          name="url"
          value={formState.url}
          placeholder="Ex: myawesomesite.com"
          onChange={(e) => {
            formChange(e);
          }}
        />
      </label>
      <div className="websiteCategory">
        <h2>Category</h2>
        <WebsiteCategoryButton
          name="category"
          selected={formState.category === "wordpress"}
          data-category="wordpress"
          onClick={(e) => {
            formChange(e);
          }}
        >
          <SiWordpress />
        </WebsiteCategoryButton>
        <WebsiteCategoryButton
          name="category"
          data-category="woocommerce"
          selected={formState.category === "woocommerce"}
          onClick={(e) => {
            formChange(e);
          }}
        >
          <SiWoo />
        </WebsiteCategoryButton>
      </div>
      <label>
        <h2>User</h2>
        <span>The username used to log-in to your website.</span>
        <input
          type="text"
          name="user"
          value={formState.user}
          placeholder="Ex: admin"
          onChange={(e) => {
            formChange(e);
          }}
        />
      </label>
      <label>
        <h2>Password</h2>
        <span>
          Don't worry. It is encrypted before it is saved to the database and
          decrypted just for you or your dev.
        </span>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={(e) => {
            formChange(e);
          }}
        />
      </label>
      {formState.url.length > 1 && formState?.url.includes(".com") && (
        <label>
          <h2>Admin URL</h2>
          <span>
            Only if you log-in from somewhere other than https://{formState.url}
            /wp-admin
          </span>
          <input
            type="password"
            name="password"
            value={formState.password}
            placeholder={`Ex:  https://${formState.url}/login`}
            onChange={(e) => {
              formChange(e);
            }}
          />
        </label>
      )}
      <input type="submit" value="Add website" />
    </FormWebsiteContainer>
  );
};

export default AddWebsite;
