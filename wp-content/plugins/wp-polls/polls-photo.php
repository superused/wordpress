<?php
### Check Whether User Can Manage Polls
if(!current_user_can('manage_polls')) {
    die('Access Denied');
}
// $photoData = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $wpdb->pollsa WHERE polla_type = 'photo' order by polla_aid desc;"));
$photoData = $wpdb->get_results($wpdb->prepare("SELECT * from $wpdb->pollsa a inner join $wpdb->pollsq q on q.pollq_id = a.polla_qid where polla_type = 'photo' and pollq_active = 1;"));
if (!$photoData) {
  echo 'error';exit;
}
$poll_aids = array_map(function($s) {
  return $s->polla_aid;
}, $photoData);
$poll_id = $photoData[0]->polla_qid;

if ($_POST) {
  $deleteDatas = array_filter($poll_aids, function($s) {
    return !in_array($s, $_POST['polla_aid']);
  });
  $columns = ['photo', 'episode', 'name', 'title'];
  $cnt = count($_POST['polla_aid']);
  $updateDatas = [];
  $insertDatas = [];
  for ($i = 0; $i < $cnt; $i++) {
    $aid = $_POST['polla_aid'][$i];
    $json = [];
    foreach ($columns as $column) {
      $json[$column] = $_POST[$column][$i];
    }
    if ($aid == 'new') {
      $insertDatas[] = [
        'polla_qid' => $poll_id,
        'polla_answers' => $json['name'],
        'polla_datas' => json_encode($json, true),
        'polla_type' => 'photo',
      ];
    } else {
      $updateDatas[$aid] = json_encode($json, true);
    }
  }

  foreach ($deleteDatas as $deleteData) {
    $delete_poll_question = $wpdb->delete(
      $wpdb->pollsa,
      [
        'polla_aid' => $deleteData,
      ],
      [
        '%d',
      ]
    );
    if ($delete_poll_question) {
      echo 'id: ' . $deleteData . ' を削除しました<br>';
    } else {
      echo 'id: ' . $deleteData . ' の削除に失敗しました<br>';
    }
  }
  foreach ($updateDatas as $aid => $updateData) {
    $edit_poll_question = $wpdb->update(
      $wpdb->pollsa,
      [
        'polla_datas' => esc_html($_POST['name']),
        'polla_datas' => $updateData,
      ],
      [
        'polla_aid' => $aid
      ],
      [
        '%s',
        '%s',
      ],
      [
        '%d'
      ]
    );
    if ($edit_poll_question) {
      echo 'id: ' . $aid . ' を更新しました<br>';
    } else {
      echo 'id: ' . $aid . ' は変更が無かったため更新しませんでした<br>';
    }
  }
  foreach ($insertDatas as $insertData) {
    $add_poll_question = $wpdb->insert(
      $wpdb->pollsa,
      $insertData,
      [
        '%d',
        '%s',
        '%s',
        '%s',
      ]
    );
    if ($add_poll_question) {
      echo '1件追加しました<br>';
    } else {
      echo '1件追加に失敗しました<br>';
    }
  }
}

        $last_col_align = is_rtl() ? 'right' : 'left';
        $poll_question = $wpdb->get_row( $wpdb->prepare( "SELECT pollq_question, pollq_timestamp, pollq_totalvotes, pollq_active, pollq_expiry, pollq_multiple, pollq_totalvoters FROM $wpdb->pollsq WHERE pollq_id = %d", $poll_id ) );
        // $poll_answers = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $wpdb->pollsa WHERE polla_qid = %d ORDER BY polla_aid ASC", $poll_id ) );
        $poll_answers = $photoData;
        foreach ($poll_answers as $key => $poll_answer) {
          if (isset($poll_answer->polla_datas)) {
            $poll_answers[$key]->polla_datas = json_decode($poll_answer->polla_datas, true);
          }
        }
        $poll_noquestion = $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(polla_aid) FROM $wpdb->pollsa WHERE polla_qid = %d", $poll_id ) );
        $poll_question_text = removeslashes($poll_question->pollq_question);
        $poll_totalvotes = (int) $poll_question->pollq_totalvotes;
        $poll_timestamp = $poll_question->pollq_timestamp;
        $poll_active = (int) $poll_question->pollq_active;
        $poll_expiry = trim($poll_question->pollq_expiry);
        $poll_multiple = (int) $poll_question->pollq_multiple;
        $poll_totalvoters = (int) $poll_question->pollq_totalvoters;
?>
        <?php if(!empty($text)) { echo '<!-- Last Action --><div id="message" class="updated fade">'.removeslashes($text).'</div>'; } else { echo '<div id="message" class="updated" style="display: none;"></div>'; } ?>

        <!-- Edit Poll -->
        <form method="post" action="<?php echo admin_url('admin.php?page='.plugin_basename(__FILE__).'&amp;mode=edit&amp;id='.$poll_id); ?>">
        <?php wp_nonce_field('wp-polls_edit-poll'); ?>
        <input type="hidden" name="pollq_id" value="<?php echo $poll_id; ?>" />
        <input type="hidden" name="pollq_active" value="<?php echo $poll_active; ?>" />
        <input type="hidden" name="poll_timestamp_old" value="<?php echo $poll_timestamp; ?>" />
        <div class="wrap">
            <h2><?php _e('写真編集', 'wp-polls'); ?></h2>
            <!-- Poll Question -->
            <h3><?php echo esc_attr( $poll_question_text ); ?></h3>
            <!-- Poll Answers -->
            <table id="add_poll_manage" class="form-table" border="1" style="border: 2px solid #dddddd; padding: 3px; margin: 0">
                <thead>
                    <tr>
                        <th scope="row" valign="top">作者</th>
                        <th scope="row" valign="top">タイトル</th>
                        <th scope="row" valign="top">写真URL</th>
                        <th scope="row" valign="top">エピソード</th>
                    </tr>
                </thead>
                <tbody id="poll_answers">
<?php foreach($poll_answers as $poll_answer): ?>
<tr>
                  <td>
                    <input type="hidden" name="polla_aid[]" value="<?= esc_attr($poll_answer->polla_aid); ?>">
                    <input type="text" name="name[]" value="<?= esc_attr($poll_answer->polla_datas['name']); ?>">
                  </td>
                  <td><input type="text" name="title[]" value="<?= esc_attr($poll_answer->polla_datas['title']); ?>"</td>
                  <td><input type="text" name="photo[]" value="<?= esc_attr($poll_answer->polla_datas['photo']); ?>"</td>
                  <td><textarea name="episode[]"><?= esc_attr($poll_answer->polla_datas['episode']); ?></textarea></td>
                  <td>
                    <button class="add_poll_remove" class="button" onclick="javascript:void(0);" style="white-space:nowrap">削除</button>
                  </td>
</tr>
<?php endforeach; ?>
                </tbody>
            </table>
            <button id="manage_polls_add" class="button" onclick="javascript:void(0);">行を追加</button>
            <p style="text-align: center;">
                <input type="submit" name="do" value="<?php _e('Edit Poll', 'wp-polls'); ?>" class="button-primary" />&nbsp;&nbsp;
                <input type="button" name="cancel" value="<?php _e('Cancel', 'wp-polls'); ?>" class="button" onclick="javascript:history.go(-1)" />
            </p>
        </div>
        </form>
