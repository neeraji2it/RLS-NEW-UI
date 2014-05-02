module ApplicationHelper
  
  def link_to_add_fields(name, f, association)
    new_object=f.object.class.reflect_on_association(association).klass.new
    fields=f.fields_for(association, new_object, :child_index=>"new_#{association}") do |amenty|
      render(association.to_s.singularize + "_fields", :f=>amenty)
    end
    link_to_function(name, "add_fields(this, \"#{association}\", \"#{escape_javascript(fields)}\")")
  end
  
  def link_to_remove_fields(name, f)
    f.hidden_field(:destroy)+link_to_function(name, "remove_fields(this)")
  end
  
  def resource
    @resource ||= User.new
  end
  def resource_name
    :user
  end
  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end
  def devise_error_messages!
    return '' if resource.errors.empty?

    messages = resource.errors.full_messages.map { |msg| content_tag(:li, msg) }.join
    html = <<-HTML
    <div class="alert alert-error alert-block"> <button type="button"
    class="close" data-dismiss="alert">x</button>
      #{messages}
    </div>
    HTML

    html.html_safe
  end
   
end
