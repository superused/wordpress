var global_poll_id=0,global_poll_aid=0,global_poll_aid_votes=0,count_poll_answer_new=0,count_poll_answer=3;function delete_poll(a,c,d){if(delete_poll_confirm=confirm(c))global_poll_id=a,jQuery(document).ready(function(b){b.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_delete_poll+"&pollq_id="+a+"&action=polls-admin&_ajax_nonce="+d,cache:!1,success:function(a){b("#message").html(a);b("#message").show();b("#poll-"+global_poll_id).remove()}})})}
function delete_poll_logs(a,c){(delete_poll_logs_confirm=confirm(a))&&jQuery(document).ready(function(a){a("#delete_logs_yes").is(":checked")?a.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_delete_all_logs+"&delete_logs_yes=yes&action=polls-admin&_ajax_nonce="+c,cache:!1,success:function(b){a("#message").html(b);a("#message").show();a("#poll_logs").html(pollsAdminL10n.text_no_poll_logs)}}):alert(pollsAdminL10n.text_checkbox_delete_all_logs)})}
function delete_this_poll_logs(a,c,d){(delete_poll_logs_confirm=confirm(c))&&jQuery(document).ready(function(b){b("#delete_logs_yes").is(":checked")?(global_poll_id=a,b.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_delete_poll_logs+"&pollq_id="+a+"&delete_logs_yes=yes&action=polls-admin&_ajax_nonce="+d,cache:!1,success:function(a){b("#message").html(a);b("#message").show();b("#poll_logs").html(pollsAdminL10n.text_no_poll_logs);b("#poll_logs_display").hide();b("#poll_logs_display_none").show()}})):
	alert(pollsAdminL10n.text_checkbox_delete_poll_logs)})}
function delete_poll_ans(a,c,d,b,e){if(delete_poll_ans_confirm=confirm(b))global_poll_id=a,global_poll_aid=c,global_poll_aid_votes=d,temp_vote_count=0,jQuery(document).ready(function(b){b.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_delete_poll_ans+"&pollq_id="+a+"&polla_aid="+c+"&action=polls-admin&_ajax_nonce="+e,cache:!1,success:function(a){b("#message").html(a);b("#message").show();b("#poll_total_votes").html(parseInt(b("#poll_total_votes").html())-parseInt(global_poll_aid_votes));
	b("#pollq_totalvotes").val(temp_vote_count);b("#poll-answer-"+global_poll_aid).remove();check_totalvotes();reorder_answer_num()}})})}
function opening_poll(a,c,d){if(open_poll_confirm=confirm(c))global_poll_id=a,jQuery(document).ready(function(b){b.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_open_poll+"&pollq_id="+a+"&action=polls-admin&_ajax_nonce="+d,cache:!1,success:function(a){b("#message").html(a);b("#message").show();b("#open_poll").hide();b("#close_poll").show()}})})}
function closing_poll(a,c,d){if(close_poll_confirm=confirm(c))global_poll_id=a,jQuery(document).ready(function(b){b.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_close_poll+"&pollq_id="+a+"&action=polls-admin&_ajax_nonce="+d,cache:!1,success:function(a){b("#message").html(a);b("#message").show();b("#open_poll").show();b("#close_poll").hide()}})})}
function reorder_answer_num(){jQuery(document).ready(function(a){var c=a("#pollq_multiple"),d=c.val(),b=a("> option",c).size();c.empty();a("#poll_answers tr > th").each(function(b){a(this).text(pollsAdminL10n.text_answer+" "+(b+1));a(c).append('<option value="'+(b+1)+'">'+(b+1)+"</option>")});if(1<d){var e=a("> option",c).size();d<=e?a("> option",c).eq(d-1).attr("selected","selected"):d==b&&a("> option",c).eq(e-1).attr("selected","selected")}})}
function check_totalvotes(){temp_vote_count=0;jQuery(document).ready(function(a){a("#poll_answers tr td input[size=4]").each(function(c){temp_vote_count=isNaN(a(this).val())?temp_vote_count+0:temp_vote_count+parseInt(a(this).val())});a("#pollq_totalvotes").val(temp_vote_count)})}
function add_poll_answer_add(){jQuery(document).ready(function(a){a("#poll_answers").append('<tr id="poll-answer-'+count_poll_answer+'"><th width="20%" scope="row" valign="top"></th><td width="80%"><input type="text" size="50" maxlength="200" name="polla_answers[]" />&nbsp;&nbsp;&nbsp;<input type="button" value="'+pollsAdminL10n.text_remove_poll_answer+'" onclick="remove_poll_answer_add('+count_poll_answer+');" class="button" /></td></tr>');count_poll_answer++;reorder_answer_num()})}

function add_poll_answer_db() {
  var tr = jQuery('.form-table').eq(1).find('tr').last();
  var id = parseInt(tr.attr('id').split('-').pop()) + 1;
  var $this = jQuery('<tr id="poll-answer-' + id + '">').append(tr.html()).appendTo('#poll_answers');
  $this.find('th').html(tr.find('th').text().split(' ').shift() + ' ' + id);
  $this.find('input[type=button]').attr('onclick', 'remove_poll_answer_add(' + id + ')');
}
// enterでのsubmit起動防止
jQuery(function() {
  jQuery("input").keydown(function(e) {
    if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
      return false;
    } else {
      return true;
    }
  });
})
function remove_poll_answer_add(a){jQuery(document).ready(function(c){c("#poll-answer-"+a).remove();reorder_answer_num()})}
function add_poll_answer_edit(){jQuery(document).ready(function(a){a("#poll_answers").append('<tr id="poll-answer-new-'+count_poll_answer_new+'"><th width="20%" scope="row" valign="top"></th><td width="60%"><input type="text" size="50" maxlength="200" name="polla_answers_new[]" />&nbsp;&nbsp;&nbsp;<input type="button" value="'+pollsAdminL10n.text_remove_poll_answer+'" onclick="remove_poll_answer_edit('+count_poll_answer_new+');" class="button" /></td><td width="20%" align="'+pollsAdminL10n.text_direction+
	'">0 <input type="text" size="4" name="polla_answers_new_votes[]" value="0" onblur="check_totalvotes();" /></td></tr>');count_poll_answer_new++;reorder_answer_num()})}function remove_poll_answer_edit(a){jQuery(document).ready(function(c){c("#poll-answer-new-"+a).remove();check_totalvotes();reorder_answer_num()})}
function check_pollq_multiple(){jQuery(document).ready(function(a){1==parseInt(a("#pollq_multiple_yes").val())?a("#pollq_multiple").attr("disabled",!1):(a("#pollq_multiple").val(1),a("#pollq_multiple").attr("disabled",!0))})}function check_polltimestamp(){jQuery(document).ready(function(a){a("#edit_polltimestamp").is(":checked")?a("#pollq_timestamp").show():a("#pollq_timestamp").hide()})}
function check_pollexpiry(){jQuery(document).ready(function(a){a("#pollq_expiry_no").is(":checked")?a("#pollq_expiry").hide():a("#pollq_expiry").show()})};
jQuery(function() {
  const $ = jQuery;
  $("#manage_polls_add").click(function(e) {
    var clone = $('#add_poll_manage').find('tr').last().clone();
    $('#add_poll_manage').append(clone);
    clone.find('input,textarea,select').each(function() {
      $(this).val('');
    });
    clone.find('input[type=hidden]').attr('value', 'new');
    return false;
  });
  $(".add_poll_remove").click(function(e) {
    $(this).closest('tr').remove();
  });
});
